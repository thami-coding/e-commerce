import { Heart, X } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CartProduct() {
  return (
    <article className="bg-white relative  p-4 flex w-5xl rounded-md mb-5">
      <div className="absolute right-4 text-[#c0c0c0] flex gap-x-2">
        <Heart fill="#c0c0c0" size={20} />
        <X size={20}/>
      </div>
      <div className="rounded-md w-60 overflow-hidden h-60 mr-6">
        <Image
          src={"https://picsum.photos/seed/QnkkI0P/3665/1892"}
          width={400}
          height={700}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pt-3">
        <h2 className="text-2xl font-bold">
          Tapered regular jeans - denim grey
        </h2>
        <div className="flex items-center gap-x-5 mt-5">
          <div className="flex">
            <p className="mr-3 text-[#aaaaaa] font-bold">Quantity:</p>
            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <p className="text-[#aaaaaa] font-bold">
            Size: <span className="font-light text-black">M</span>
          </p>
        </div>
        <p className="mt-8 max-w-1/2 text-[#686464]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae
          perferendis unde repellat odio accusamus, cupiditate omnis quisquam
          neque velit.
        </p>
        <p className="absolute bottom-4 right-4 font-bold">R3495</p>
      </div>
    </article>
  );
}
