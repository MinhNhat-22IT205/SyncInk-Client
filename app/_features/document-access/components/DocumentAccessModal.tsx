import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

import { DocumentAccessType } from "../types/document-access-schema.type";

import DocumentAccessItem from "./DocumentAccessItem";
import {
  addDocumentAccess,
  updateDocumentAccess,
} from "../api/documentAccessApi";
import {
  addDocumentAccessOptions,
  updateDocumentAccessOptions,
} from "../api/documentAccessSwrOptimisticOptions";
import AddPeopleInput from "./AddPeopleInput";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const DocumentAccessModal = ({ isOpen, onClose }: Props) => {
  const { id: documentId } = useParams();
  const { data, mutate } = useSWR<[DocumentAccessType]>(
    "/document-access?documentId=" + documentId,
  );
  const handleRoleChange = (
    access: DocumentAccessType,
    newRole: DocumentAccessType["role"],
  ) => {
    try {
      mutate(
        updateDocumentAccess({
          documentAccessId: access.id,
          documentRole: newRole,
        }),
        updateDocumentAccessOptions(access),
      );
    } catch (er) {
      console.log(er);
    }
  };
  const handleAddDocumentAccess = (access: Omit<DocumentAccessType, "id">) => {
    try {
      mutate(
        addDocumentAccess({
          documentId: access.documentId,
          endUserId: access.endUserId,
          documentRole: access.role,
        }),
        addDocumentAccessOptions(access),
      );
    } catch (er) {
      console.log(er);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AddPeopleInput handleAddDocumentAccess={handleAddDocumentAccess} />
          <Text fontWeight="bold" mb="1rem">
            People having access
          </Text>
          {data?.map((access) => (
            <DocumentAccessItem
              handleRoleChange={handleRoleChange}
              key={access.id}
              access={access}
            />
          ))}
          <Text fontWeight="bold" mb="1rem">
            Public access
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DocumentAccessModal;
