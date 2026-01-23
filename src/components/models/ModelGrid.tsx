import type { ModelCardData } from "@/types/model";
import ModelCard from "./ModelCard";

type Props = {
  items: ModelCardData[];
  onTry?: (slug: string) => void; // ✅ slug
};

export default function ModelGrid({ items, onTry }: Props) {
  return (
    <div className="md:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ModelCard key={item.id} item={item} onTry={onTry} />
      ))}
    </div>
  );
}
