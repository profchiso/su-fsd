"use client";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import Item, { IData } from "@/components/Item";
import Dropdown from "@/components/Dropdown";

const API_URL = "https://su-fsd-api.onrender.com/api/data";

const Home: NextPage = () => {
  const [items, setItems] = useState<IData[]>([]);

  const handleSort = (sortBy: string) => {
    console.log(sortBy);
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
