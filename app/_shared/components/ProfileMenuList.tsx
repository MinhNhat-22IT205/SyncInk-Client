"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FiBell, FiChevronDown } from "react-icons/fi";

import { logout } from "../lib/next-auth/logout-action";

type ProfileMenuListProps = {
  src?: string;
  username?: string;
};
const ProfileMenuList = ({ src, username }: ProfileMenuListProps) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <HStack spacing={{ base: "0", md: "6" }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<FiBell />}
      />
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Avatar size={"sm"} src={src || ""} />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{username}</Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem
              as={Button}
              onClick={async () => {
                setIsLoading(true);
                await logout();
                setIsLoading(false);
              }}
              isLoading={isLoading}
              spinnerPlacement="end"
              icon={<BiLogOut size={20} />}
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
};

export default ProfileMenuList;
