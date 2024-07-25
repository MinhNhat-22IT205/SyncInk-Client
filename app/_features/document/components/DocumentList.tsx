"use client";
import {
  Box,
  Grid,
  GridItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";

import { useYourDocuments } from "../hooks/use-your-documents";

import DocumentCard from "./DocumentCard";
import { AddIcon } from "@chakra-ui/icons";
import AddDocumentFormModal from "./AddDocumentFormModal";

const DocumentList = () => {
  const { documents } = useYourDocuments();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
        {documents?.map((doc) => (
          <GridItem key={doc.id} rowSpan={1}>
            <DocumentCard document={doc} />
          </GridItem>
        ))}
        <GridItem key={"abc"} rowSpan={1}>
          <Box
            w={300}
            h="100%"
            minH={250}
            bgColor="white"
            rounded="lg"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="dashed"
            borderWidth={2}
            borderColor="teal.400"
          >
            <IconButton
              aria-label="Create new document"
              icon={<AddIcon />}
              bgColor="white"
              color="teal"
              borderWidth={2}
              borderColor="teal"
              isRound
              onClick={onOpen}
            />
          </Box>
        </GridItem>
      </Grid>
      <AddDocumentFormModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default dynamic(() => Promise.resolve(DocumentList), {
  ssr: false,
});
