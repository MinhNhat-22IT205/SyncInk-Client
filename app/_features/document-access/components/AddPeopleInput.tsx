import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

import { EndUserType } from "@/app/_shared/types/endUser-schema.type";

import { DocumentAccessType } from "../types/document-access-schema.type";

type Props = {
  // eslint-disable-next-line no-unused-vars
  handleAddDocumentAccess: (access: Omit<DocumentAccessType, "id">) => void;
};

const AddPeopleInput = ({ handleAddDocumentAccess }: Props) => {
  const [input, setInput] = useState("");
  const { id: documentId } = useParams();
  const { data: endUsers, mutate } = useSWR<EndUserType[]>(
    "/users?search=" + input,
  );
  useEffect(() => {
    const interval = setInterval(() => {
      mutate();
    }, 1000);
    return () => clearInterval(interval);
  }, [input, mutate]);
  return (
    <>
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Add people"
      />
      <Box pos="fixed" w="100%" zIndex={2}>
        {endUsers?.map((endUser) => (
          <Box
            as={Button}
            variant="ghost"
            colorScheme="gray"
            key={endUser.id}
            onClick={() => {
              handleAddDocumentAccess({
                documentId: documentId as string,
                endUser: endUser,
                endUserId: endUser.id,
                role: "VIEWER",
              });
            }}
          >
            <Flex alignItems="center" gap={3}>
              <Avatar size="sm" src={endUser.avatar} />
              <Flex direction="column">
                <Text ml="1rem">{endUser.username}</Text>
                <Text ml="1rem" color="GrayText">
                  {endUser.email}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default AddPeopleInput;
