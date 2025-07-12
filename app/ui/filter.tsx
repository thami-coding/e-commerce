"use client";
import clsx from "clsx";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Filter({ filter }: { filter: string }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="flex justify-start items-center w-60 gap-x-1.5 cursor-pointer"
    >
      <span
        className={clsx(
          "flex justify-center items-center h-4 w-4 bg-black  border border-black text-white rounded-full cursor-pointer",
          !isActive && "bg-white"
        )}
      >
        {isActive && <Check size={17} />}
      </span>

      <p className={clsx(isActive && "font-bold")}> {filter}</p>
    </button>
  );
}
