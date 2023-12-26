"use client";
import { NextPage } from "next";
import { useState, useEffect } from "react";
const moment = require("moment");
import Item, { IData } from "@/components/Item";
import Dropdown from "@/components/Dropdown";

const API_URL = "https://su-fsd-api.onrender.com/api/data";
function extractNumericValue(fileName: string) {
  const numericMatch = fileName.match(/\d+/);
  return numericMatch ? parseInt(numericMatch[0], 10) : null;
}

const Home: NextPage = () => {
  const [items, setItems] = useState<IData[]>([]);

  const handleSort = (sortBy: string) => {
    if (sortBy === "createdAscendent") {
      let sortedByDate = items.sort((a, b) =>
        moment(a.date, "YYYY-MM-DD HH:mm").diff(
          moment(b.date, "YYYY-MM-DD HH:mm")
        )
      );

      setItems(sortedByDate);
    } else if (sortBy === "filenameAscendent") {
      const ascSortedData = [...items].sort((a, b) => {
        const numericA = extractNumericValue(a.fileName);
        const numericB = extractNumericValue(b.fileName);

        if (numericA !== null && numericB !== null) {
          return numericA - numericB;
        } else {
          return a.fileName.localeCompare(b.fileName);
        }
      });

      setItems(ascSortedData);
    } else if (sortBy === "filenameDescendent") {
      const descSortedData = [...items].sort((a, b) => {
        const numericA = extractNumericValue(a.fileName);
        const numericB = extractNumericValue(b.fileName);

        if (numericA !== null && numericB !== null) {
          return numericB - numericA;
        } else {
          return b.fileName.localeCompare(a.fileName);
        }
      });
      setItems(descSortedData);
    }
  };

  useEffect(() => {
    const getItems = async () => {
      const fetchItems = await fetch(API_URL);
      const itemsAsJson = await fetchItems.json();
      setItems(itemsAsJson);
    };
    getItems();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center  w-screen mt-8">
        <Dropdown handleSort={handleSort} />
      </div>
      <div className="flex items-center justify-center  w-screen mt-8">
        <div className="grid grid-cols-2 gap-8">
          {items.length
            ? items.map((item, i) => <Item data={item} key={i} />)
            : "No items"}
        </div>
      </div>
    </>
  );
};
export default Home;
