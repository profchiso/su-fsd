import React from "react";

interface Idata {
  date: string;
  fileName: string;
}

function Item({ data }: { data: Idata }) {
  return (
    <div>
      <div>{data.date}e</div>
      <div>{data.fileName}</div>
    </div>
  );
}

export default Item;
