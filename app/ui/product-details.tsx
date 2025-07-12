"use client";

import clsx from "clsx";
import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
export default function ProductDetails() {
  const sizes = ["S", "M", "L"];
  const [index, setIndex] = useState(0);
  const pantsSizes = [
    "30/32",
    "31/32",
    "32/32",
    "34/32",
    "36/32",
    "38/32",
    "29/32",
  ];
  return (
    <div className="flex w-[65rem] ml-10">
      <div>
        <div className="rounded-md overflow-hidden w-90 h-[24rem] mr-7 border">
          <Image
            src={"https://picsum.photos/seed/QnkkI0P/3665/1892"}
            width={400}
            height={900}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center mt-2">
          {sizes.map((size, i) => {
            return (
              <button
                onClick={() => setIndex(i)}
                key={size}
                className={clsx(
                  "rounded-md overflow-hidden w-20 h-17 mr-7 relative cursor-pointer",
                  {
                    "border border-black ": i === index,
                  }
                )}
              >
                {i !== index && (
                  <div className="absolute inset-0 bg-white opacity-50"></div>
                )}
                <Image
                  src={"https://picsum.photos/seed/QnkkI0P/3665/1892"}
                  width={400}
                  height={150}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className=" text text-[#686464] max-w-[40rem]">
        <h2 className="text-2xl pt-4">Tapered regular jeans - denim grey</h2>
        <p className="mt-5 text-2xl mb-4 text-black/80">R699</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa soluta
          dicta, totam eveniet asperiores enim libero quaerat perferendis
          doloribus laborum?
        </p>
        <p className="text-black/80 mt-8 mb-4 uppercase text-xs font-bold">
          select a size
        </p>
        <div className="flex gap-x-2 border-b-3 pb-2 border-black">
          {pantsSizes.map((size) => {
            return (
              <button
                className="text-xs border border-black/25 px-2.5  py-4 rounded-full cursor-pointer"
                key={size}
              >
                {size}
              </button>
            );
          })}
        </div>
        <div className="flex  mt-8 gap-x-2">
          <button className="flex-1/2 flex justify-center items-center p-1.5 gap-x-3 uppercase text-sm bg-black text-white cursor-pointer">
            <ShoppingCart /> add to cart
          </button>
          <button className="flex-1/2 flex justify-center items-center p-1.5 gap-x-3 uppercase text-sm bg-white text-black border-2 border-black cursor-pointer">
            <Heart /> add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
