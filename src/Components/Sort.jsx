import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

//Received props and using them to handle sorting
//Sorting based on id, name, rank,price_usd,percent_change_24h, price_btc, _cap_usd


function Sort({ sortColumn, sortOrder, sortHandling }) {
  return (
    <>
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
    </>
  );
}

export default Sort;
