"use client";
import Image from "next/image";
import Ratings from "./ratings";
import Sizes from "./sizes";

export default function Product() {
  return (
    <article className="border border-[#afaeae2f] mt-2 ml-2 p-4 w-80 rounded-md ">
      <div className="rounded-md overflow-hidden h-60">
        <Image
          src={"https://picsum.photos/seed/QnkkI0P/3665/1892"}
          width={400}
          height={700}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="mt-5 flex justify-between items-center">
          <div className="flex gap-x-1 items-center">
            <h3 className="font-bold text-[1.2rem]">White Sneakers</h3>
            <Ratings />
          </div>
          <p className="font-bold">R30</p>
        </div>
      </div>
      <p className="mt-1 text-sm mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ex.</p>
      <p>Pick your size</p>
      <Sizes />
      <button className="mt-4 bg-black text-white p-1.5 rounded-md w-full hover:bg-zinc-600 cursor-pointer">Add to cart</button>
    </article>
  );
}
