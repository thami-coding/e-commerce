import { Pencil, SquarePlus, Trash } from "lucide-react";
import React from "react";

export default function ShippingDetails() {
  return (
    <div className="w-fit ml-4">
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray px-4 py-2">
              Please select your address so we can give you available delivery
              options
            </th>
            <th className="border border-gray px-4">Edit</th>
            <th className="border border-gray px-4">Delete</th>
            <th className="border border-gray px-4">Select</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" border border-gray p-2">
              34 Thorny Hill place, Newlands West, Durban, 4037{" "}
              <p className="mt-2">
                {" "}
                <span className="font-bold">Recepient:</span> Thamsanqa Gumede,
                0659972023
              </p>
            </td>
            <td className="border border-gray">
              <button className="block mr-auto ml-auto cursor-pointer">
                <Pencil />
              </button>
            </td>
            <td className="border border-gray">
              <button className="block mr-auto ml-auto cursor-pointer">
                <Trash />
              </button>
            </td>
            <td className="text-center border">
              <input type="radio" name="" id="" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="flex gap-x-1 bg-[#cecdcd80] p-2 items-center ml-auto mr-auto mt-4 font-bold rounded-sm cursor-pointer">
        <SquarePlus className="text-green-500" />
        <span className="uppercase text-xs">add address</span>
      </button>
    </div>
  );
}
