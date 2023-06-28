//This is the complete code. 
//Once the entire functionality was working I devided the code into different Components. 
// You can find the details of every functionality in there seprate components.

import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  Box,
Select



} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import axios from "axios";

function EntireCode() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setpage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [select, setSelect] = useState("rank")
 

  useEffect(() => {

    const DataFetching = async () => {
      try {
        const res = await axios.get(
          `https://api.coinlore.net/api/tickers/?start=${(page - 1) * 8}&limit=8`
        );
       // console.log(res.data.data)
        setData(res.data.data);
      } 
      
      catch (err) {
        console.log(err); // handles the error
      }
    };

    DataFetching();// Function call

  }, [page]);// 8 rows displayed per page




  //Search Functionality based on name and ID
  const SearchFunctionality = data.filter((elem) => {

    const id = String(elem.id);
    const name = elem.name.toLowerCase();
 
    return (
      name.includes(search.toLowerCase()) ||   id.includes(search.toLowerCase())
    );
});



  //Sorting based on ascending & descending
  const sortHandling = (column) => {
      if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } 
    
    else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };



// Handling Final Sorting and using this data to Map
  const CompletedSort = [...SearchFunctionality].sort((a, b) => {
    if (sortOrder  ===  "asc") {
      return a[sortColumn] -  b[sortColumn];
    }
     else {
      return b[sortColumn]  -   a[sortColumn];
    }
  });


//To handle Select
const handleSelect = (e) => {
  setSelect(e.target.value);
}


// Final data 
const FinalMap = [...CompletedSort].sort((a, b) => {
    const valueA = a[select];
    const valueB = b[select];

    if (typeof valueA   ===   "string"   &&     typeof   valueB  ===  "string") {
     
      return valueA.localeCompare(valueB);
    }

    return valueA - valueB;
  });








  return (
    <>
      <Input
       placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        width="40%"
        mt={10}
      />


<Select placeholder='Select option'
 value={select}
  onChange={handleSelect}
  width="10%"
  ml={5}
>
  <option value='rank'>Rank</option>
  <option value='price_usd'>Price(USD)</option>
  <option value='price_btc'>Price(BTC)</option>
  <option value='market'> Market Cap USD</option>
  </Select>



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
          {FinalMap.map((ticker) => (
            <Tr key={ticker.id}>
              <Td>{ticker.id}</Td>
              <Td>{ticker.name}</Td>
              <Td>{ticker.rank}</Td>
              <Td>{ticker.price_usd}</Td>
              <Td>{ticker.percent_change_24h}</Td>
              <Td>{ticker.price_btc}</Td>
              <Td>{ticker.market_cap_usd}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Box mt={5}>
        <Button
         mr={2}
         colorScheme="pink"
          disabled={page === 1}
          onClick={() => setpage(page - 1)
          
          }
        >
          PREV
        </Button>
        <Button colorScheme="pink"   mr={2}>{page}</Button>
        <Button
          mr={2}
          colorScheme="pink"
          
          onClick={() => setpage(page + 1)}
        >
          NEXT
        </Button>
      </Box>
    </>
  );
}

export default EntireCode;
