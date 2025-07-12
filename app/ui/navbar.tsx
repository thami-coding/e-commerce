import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-black text-white pb-6 pt-8">
      <p className="text-md font-bold text-[1.2rem]">Threaded</p>
      <form className="flex w-xl mx-36">
        <label
          htmlFor="search"
          className="flex pl-4 w-full rounded-2xl bg-[#313131] text-[#bbbbbb] items-center 
        "
        >
          <button type="submit">
            <Search size={14} className="text-[#bbbbbb] cursor-pointer" />
          </button>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="pl-2 text-sm block w-full focus:outline-none focus:ring-0 focus:border-transparent"
          />
        </label>
      </form>
      <div className="flex gap-x-5">
        <Heart />
        <ShoppingCart />
        <UserRound />
      </div>
    </nav>
  );
}
