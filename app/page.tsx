"use client";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import Item from "@/components/Item";
import Dropdown from "@/components/Dropdown";

const Home: NextPage = () => {
  const [items, setItems] = useState([
    { date: "26-12-2023", fileName: "test1" },
    { date: "27-01-2024", fileName: "test2" },
    { date: "27-01-2024", fileName: "test2" },
    { date: "27-01-2024", fileName: "test2" },
    { date: "27-01-2024", fileName: "test2" },
    { date: "27-01-2024", fileName: "test2" },
  ]);
  useEffect(() => {
    const getItems = async () => {
      const fetchItems = await fetch("http://localhost:5000/api/items");
      const itemsAsJson = await fetchItems.json();
      setItems(itemsAsJson);
    };
    getItems();
  }, [items]);

  return (
    <>
      <div className="flex items-center justify-center  w-screen mt-8">
        <Dropdown />
      </div>
      <div className="flex items-center justify-center  w-screen mt-8">
        <div className="grid grid-cols-2 gap-8">
          {items.length
            ? items.map((item) => <Item data={item} key={item.fileName} />)
            : "No items"}
        </div>
      </div>
    </>
  );
};
export default Home;
