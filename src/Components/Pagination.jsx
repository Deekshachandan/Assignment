import React from "react";
import { Box, Button } from "@chakra-ui/react";


// Implementing Pagination.
// Passing handlePrevPage and HangleNextPage via props

function Pagination({ page, setPage, hasNextPage, hasPrevPage }) {

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <Box mt={5}>
      <Button
        mr={2}
        colorScheme="pink"
        disabled={!hasPrevPage}
        onClick={handlePrevPage}
      >
        PREV
      </Button>

      <Button colorScheme="pink" mr={2}>
        {page}
      </Button>


      <Button
        mr={2}
        colorScheme="pink"
        disabled={!hasNextPage}
        onClick={handleNextPage}
      >
        NEXT
      </Button>
      
    </Box>
  );
}

export default Pagination;
