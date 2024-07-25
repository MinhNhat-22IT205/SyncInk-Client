import { DeleteIcon } from "@chakra-ui/icons";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DocumentThreeDotsMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Icon as={HiOutlineDotsVertical} />}
        variant="solid"
        bgColor="white"
        color="black"
        isRound
      />
      <MenuList>
        <MenuItem icon={<DeleteIcon />} command="⌘N">
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DocumentThreeDotsMenu;
