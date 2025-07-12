"use client";
import { useState } from "react";
import clsx from "clsx";

export default function Sizes() {
  const sizes = ["S", "M", "L", "XL"];
  const [index, setIndex] = useState(0);
  return (
    <div className="flex gap-x-1">
      {sizes.map((size, i) => {
        return (
          <button
            key={size}
            onClick={() => setIndex(i)}
            className={clsx("text-white bg-black rounded-md px-2 cursor-pointer", { "bg-zinc-600": index === i })}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
