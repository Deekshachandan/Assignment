import React from "react";

import { Input } from "@chakra-ui/react";
// Search Box
function SearchInput({ value, onChange }) {
  return (

    <Input
      placeholder="Search"
      value={value}
      onChange={onChange}
      width="40%"
      mt={10}
    />

  );
}

export default SearchInput;
