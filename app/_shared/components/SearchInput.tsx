"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";

const SearchInput: React.FC = () => {
  return (
    <InputGroup maxWidth={384}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.600" />
      </InputLeftElement>
      <Input
        borderRadius="full"
        variant="filled"
        type="text"
        placeholder="Search..."
        focusBorderColor="white"
      />
    </InputGroup>
  );
};

export default SearchInput;
