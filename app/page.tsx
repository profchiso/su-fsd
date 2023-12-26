"use client";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import Item, { IData } from "@/components/Item";
import Dropdown from "@/components/Dropdown";

const API_URL = "https://su-fsd-api.onrender.com/api/data";

const Home: NextPage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const fetchItems = await fetch(API_URL);
      const itemsAsJson = await fetchItems.json();
      console.log(itemsAsJson);
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
            ? items.map((item, i) => <Item data={item} key={i} />)
            : "No items"}
        </div>
      </div>
    </>
  );
};
export default Home;
