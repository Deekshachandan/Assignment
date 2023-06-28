import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


//Passing data via props
//Th-->All table heading

function TableComp({ data, sortColumn, sortOrder, sortHandling }) {
  return (
    //sorting functionality for each column,
    <Table
      variant="striped"
      colorScheme="pink"
      size="md"
      width="90%"
      margin="auto"
      mt={7}
    >
      <Thead>
        
    <Tr>
            
          <Th onClick={() => sortHandling("id")}>
            ID{" "}
            {sortColumn === "id" &&
              (sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />)}
          </Th>

          <Th onClick={() => sortHandling("name")}>
            Name{" "}
            {sortColumn === "name" &&
              (sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />)}
          </Th>


          <Th onClick={() => sortHandling("rank")}>
            Rank{" "}
            {sortColumn === "rank" &&
              (sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />)}
          </Th>

          <Th onClick={() => sortHandling("price_usd")}>
            Price (USD){" "}
            {sortColumn === "price_usd" &&
              (sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />)}
          </Th>


          <Th onClick={() => sortHandling("percent_change_24h")}>
            Percent Change (24h){" "}
            {sortColumn === "percent_change_24h" &&
              (sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />)}
          </Th>

          <Th onClick={() => sortHandling("price_btc")}>
            Price (BTC){" "}
            {sortColumn === "price_btc" &&
              (sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />)}
          </Th>

          <Th onClick={() => sortHandling("market_cap_usd")}>
            Market Cap (USD){" "}
            {sortColumn === "market_cap_usd" &&
              (sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />)}
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        
        {data.map((elem) => (
          <Tr key={elem.id}>
            <Td>{elem.id}</Td>
            <Td>{elem.name}</Td>
            <Td>{elem.rank}</Td>
            <Td>{elem.price_usd}</Td>
            <Td>{elem.percent_change_24h}</Td>
            <Td>{elem.price_btc}</Td>
            <Td>{elem.market_cap_usd}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default TableComp;
