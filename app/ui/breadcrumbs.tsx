"use client";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function Breadcrumbs() {
  const [index, setIndex] = useState(0);
  const steps = ["Cart", "Shipping", "Payment"];

  
  return (
    // remove onClick with setIndex its just so we can compile on vercel
    <div className="flex bg-black items-center py-1" onClick={()=> setIndex(1)}>
      <h3 className="text-white ml-30 mr-70 text-md font-bold text-[1.2rem]">Threaded</h3>
      <div className="flex">
        {steps.map((step, i) => {
          return (
            <div className="flex items-center mr-6" key={i}>
              <div
                className={clsx(
                  " rounded-full w-7 h-7 text-sm bg-[#313131] flex items-center justify-center mr-1.5 text-[#a5a5a5]",
                  { "text-black bg-[#a5a5a5]": index === i }
                )}
              >
                {i + 1}
              </div>
              <p
                className={clsx(
                  "text-[#838383] uppercase text-xs",
                  index === i && "text-green-600"
                )}
              >
                {step}
              </p>
              <ChevronRight size={35} className="text-[#b1aeae6e]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
