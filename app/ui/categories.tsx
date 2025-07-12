const categories = ["women", "men", "kids", "sport"];
export default function Categories() {
  return (
    <div className="bg-[#c9c6c62f] text-lg capitalize flex gap-x-7 justify-center py-3 font-semibold">
      {categories.map((category) => {
        return <p key={category}>{category}</p>;
      })}
    </div>
  );
}
