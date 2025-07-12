import { Star } from "lucide-react";

export default function Ratings() {
  return (
    <div>
      <p className="flex items-center text-sm">
        (4.6 <Star size={14} className="inline" />)
      </p>
    </div>
  );
}
