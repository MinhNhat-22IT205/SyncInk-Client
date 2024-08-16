import { useToast } from "@chakra-ui/react";
import { DeltaStatic, Sources } from "quill";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { io, Socket } from "socket.io-client";

import { useAuth } from "@/app/_shared/hooks/use-auth";

import { SOCKET_CONNECT_URL } from "../constants/socket-connect.constant";

const SAVE_INTERVAL_MS = 5000;
type Props = {
  quill: React.MutableRefObject<ReactQuill | null>;
  documentId: string;
};
export const useDocumentSocket = ({ quill, documentId }: Props) => {
  const [socket, setSocket] = useState<Socket>();
  const toast = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const s = io(SOCKET_CONNECT_URL);
    setSocket(s);
    quill?.current?.getEditor().disable();

    return () => {
      s.disconnect();
    };
  }, [quill]);

  useEffect(() => {
    if (!socket || !quill || !user) return;

    socket.once("receive-load-document-content", ({ content }) => {
      quill.current?.getEditor().setContents(content);
      quill.current?.getEditor().enable();
    });

    socket.emit("load-document-content", { documentId, endUserId: user.id });
  }, [socket, quill, documentId, user]);

  useEffect(() => {
    if (!socket || !quill || !user) return;

    const interval = setInterval(() => {
      socket.emit("save-document", {
        content: quill.current?.getEditor().getContents(),
        documentId,
        endUserId: user.id,
      });
    }, SAVE_INTERVAL_MS);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill, user, documentId]);

  useEffect(() => {
    if (!socket || !quill) return;

    const handler = ({ content: delta }: { content: DeltaStatic }) => {
      quill.current?.getEditor().updateContents(delta);
    };
    socket.on("receive-changes", handler);

    // return () => {
    //   socket.off("receive-changes", handler);
    // };
  }, [socket, quill]);

  useEffect(() => {
    if (!socket || !quill) return;

    const handler = (
      delta: DeltaStatic,
      oldDelta: DeltaStatic,
      source: Sources,
    ) => {
      if (source !== "user") return;
      socket.emit("send-changes", { content: delta, documentId });
    };
    quill.current?.getEditor()?.on("text-change", handler);

    // return () => {
    //   editor?.off("text-change", handler);
    // };
  }, [socket, quill, documentId]);

  useEffect(() => {
    if (!socket || !quill) return;

    socket.on("exception", (data) => {
      toast({
        title: data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    });

    return () => {
      socket.off("exception");
    };
  }, [quill, socket, toast]);
};
