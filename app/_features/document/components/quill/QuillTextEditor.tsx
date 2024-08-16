"use client";
import { useParams } from "next/navigation";
import { DeltaStatic } from "quill";
import React, { useRef } from "react";
import ReactQuill from "react-quill";

import "@/app/_features/document/styles/quill.css";
import { useDocumentSocket } from "../../hooks/use-document-socket";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

type Props = {
  defaultValue?: DeltaStatic;
};

const QuillTextEditor = ({ defaultValue }: Props) => {
  const { id } = useParams();
  const quillRef = useRef<ReactQuill | null>(null);
  useDocumentSocket({ quill: quillRef, documentId: id as string });

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      modules={{ toolbar: TOOLBAR_OPTIONS }}
      defaultValue={defaultValue}
      value={quillRef.current?.getEditor().getContents()}
    />
  );
};
export default QuillTextEditor;
