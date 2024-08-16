import { LockIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";

import DocumentAccessModal from "./DocumentAccessModal";

const DocumentAccessBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
          <Button
            variant={"ghost"}
            colorScheme={"gray"}
            size={"sm"}
            leftIcon={<LockIcon />}
            onClick={onOpen}
          >
            Access
          </Button>
        </Flex>
      </Box>
      <DocumentAccessModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default DocumentAccessBar;
