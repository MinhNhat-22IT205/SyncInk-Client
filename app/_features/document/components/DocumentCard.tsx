import { Box, Card, CardBody, Divider } from "@chakra-ui/react";
import React from "react";

import { createdAgo as calculateCreatedAgo } from "@/app/_shared/utils/created-ago";

import { DocumentType } from "../types/document-schema.type";
import DocumentThreeDotsMenu from "./DocumentThreeDotsMenu";

type DocumentCardProps = {
  document: DocumentType;
};

const DocumentCard = ({ document }: DocumentCardProps) => {
  const createdAgo = calculateCreatedAgo(new Date(document?.createdAt));
  return (
    <Card width={300} overflow="hidden" borderRadius="lg">
      <Box height={40} bgColor="gray.200">
        <Box
          height="full"
          width={220}
          bgColor="white"
          marginTop={5}
          borderRadius="md"
          marginX="auto"
        >
          {document?.content}
        </Box>
      </Box>
      <Divider color="gray.200" />
      <CardBody
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {document?.title}
          </Box>
          <Box as="span" color="gray.600" fontSize="sm">
            {createdAgo}
          </Box>
        </Box>
        <DocumentThreeDotsMenu />
      </CardBody>
    </Card>
  );
};

export default DocumentCard;
