import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./SearchComponent";
import TableComp from "./Table";
import Pagination from "./Pagination";


function MainTable() {
  const [data, setData] = useState([]);  // store the response in array for easy mapping. 
  const [search, setSearch] = useState(""); // search query
  const [page, setPage] = useState(1);           // pagination
  const [sortColumn, setSortColumn] = useState(null);     //sorting on column
  const [sortOrder, setSortOrder] = useState("asc"); // sorting the data based on asc

  useEffect(() => {
    const DataFetching = async () => {
      try {
        const res = await axios.get(
          `https://api.coinlore.net/api/tickers/?start=${(page - 1) * 8}&limit=8`
        );
        //console.log(res.data.data)
        setData(res.data.data);
      }
       catch (err) {
        console.log(err);
      }
    };

    DataFetching();

  }, [page]);// To display only 8 data when page re-loads. 


  // Search Functionality
  // Will be passing this as props to search Component
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };




//Handling Sorting
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };


// sorting the data vai sort methord. 
// Column will be sorted based on ascending and descending method.
const sortedData = [...data].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortColumn] - b[sortColumn];
    } 
    else {
      return b[sortColumn] - a[sortColumn];
    }
  });

  // Filtering Data by Search Input
  const filteringSearch = sortedData.filter((elem) => {
    const id = String(elem.id);
    const name = elem.name.toLowerCase();
    return (
      name.includes(search.toLowerCase()) || id.includes(search.toLowerCase())
    );
  });


  const hasNextPage = data.length > 0 && data.length === 8;
  const hasPrevPage = page > 1;   // Implement pagination only when page>1 .

  return (
    <>
      <SearchInput value={search} onChange={handleSearchChange} />

      <TableComp
        data={filteringSearch}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
        sortHandling={handleSort}
      />

      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </>
  );
}

export default MainTable;
