import React from "react";

interface Idata {
  date: string;
  fileName: string;
}

function Item({ data }: { data: Idata }) {
  return (
    <div className="border border-solid border-white p-2 pl-8 pr-8 rounded-lg">
      <div className="p-2">{data.date}e</div>
      <div className="p-2">{data.fileName}</div>
    </div>
  );
}

export default Item;
