"use client";

import { NextPage } from "next";
import { useState, useEffect } from "react";
import Item from "@/components/Item";
import Dropdown from "@/components/Dropdown";

const Home: NextPage = () => {
  const [items, setItems] = useState([
    { date: "26-12-2023", fileName: "test1" },
    { date: "27-01-2024", fileName: "test2" },
  ]);
  useEffect(() => {
    const getItems = async () => {
      const fetchItems = await fetch("http://localhost:5000/api/items");
      const itemsAsJson = await fetchItems.json();

      return itemsAsJson;
    };
    getItems().then((items) => setItems(items));
  }, [items]);

  return (
    <>
      <div className="center w-full">
        <Dropdown />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {items.length
          ? items.map((item) => <Item data={item} key={item.fileName} />)
          : "No items"}
      </div>
    </>
  );
};
export default Home;
