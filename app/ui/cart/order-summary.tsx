import React from "react";

export default function OrderSummary() {
  return (
    <div className="p-4 w-80 text-[#383636]">
      <h2 className="text-2xl mb-5 text-zinc-600 pt-3">Your Order</h2>
      <div className="flex mb-3 justify-between">
        <p>Cart total</p>
        <p>R3495</p>
      </div>
      <div className="flex mb-3 justify-between">
        <p >Cart total</p>
        <p>R3495</p>
      </div>
      <div className="flex mb-3  border-b-1 border-gray-300 justify-between pb-2">
        <p>Delivery fee</p>
        <p>FREE</p>
      </div>
      <div className="flex mb-3 justify-between border-b-3 border-gray-300 pb-2">
        <p className="text-black">Order total</p>
        <p>R3495</p>
      </div>
      <div className="flex justify-between text-black">
        <p className="uppercase font-bold">Total to pay</p>
        <p className="font-bold">R3495</p>
      </div>
      <button className=" w-full text-white bg-black p-2 uppercase mt-4">checkout now</button>
    </div>
  );
}
