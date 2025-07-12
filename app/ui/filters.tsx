"use client";
import Filter from "./filter";
import { useState } from "react";
export default function Filters() {
  const [price, setPrice] = useState(200);
  const filters = [
    "Blouses",
    "Hoodie & Sweats",
    "Knitwear",
    "Shirts",
    "T-shirts,Vest",
  ];
  return (
    <div className="p-2  border border-black/20 w-fit h-screen ">
        <h2 className="font-semibold mb-1 text-black">Filters:</h2>
      {filters.map((filter) => {
        return <Filter key={filter} filter={filter} />;
      })}
      <div>
        <p className="font-semibold mt-4 mb-1.5 text-black">Price:</p>
        <input
          type="range"
          id=""
          max={5000}
          min={200}
          step={100}
          className="accent-black"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <p>R{" "}{price}</p>
      </div>
    </div>
  );
}
