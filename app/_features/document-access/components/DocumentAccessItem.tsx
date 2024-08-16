import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { capitalize } from "@/app/_shared/utils/capitalize";

import { documentRoles } from "../constants/document-role.constant";
import { DocumentAccessType } from "../types/document-access-schema.type";

type Props = {
  access: DocumentAccessType;
  handleRoleChange: (
    // eslint-disable-next-line no-unused-vars
    access: DocumentAccessType,
    // eslint-disable-next-line no-unused-vars
    newRole: DocumentAccessType["role"],
  ) => void;
};

const DocumentAccessItem = ({ access, handleRoleChange }: Props) => {
  return (
    <Flex key={access.id} alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap={3}>
        <Avatar size="sm" src={access.endUser.avatar} />
        <Flex direction="column">
          <Text ml="1rem">{access.endUser.username}</Text>
          <Text ml="1rem" color="GrayText">
            {access.endUser.email}
          </Text>
        </Flex>
      </Flex>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {capitalize(access.role)}
        </MenuButton>
        <MenuList>
          {documentRoles.map((role) => {
            if (role === access.role)
              return (
                <MenuItem key={role} isDisabled fill="gray">
                  {capitalize(role)}
                </MenuItem>
              );
            return (
              <MenuItem
                key={role}
                onClick={() => handleRoleChange(access, role)}
              >
                {capitalize(role)}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DocumentAccessItem;
