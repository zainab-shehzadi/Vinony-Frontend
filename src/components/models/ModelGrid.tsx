import type { ModelCardData } from "@/types/model";
import ModelCard from "./ModelCard";

type Props = {
  items: ModelCardData[];
  onTry?: (id: string) => void;
};

export default function ModelGrid({ items, onTry }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <ModelCard key={item.id} item={item} onTry={onTry} />
      ))}
    </div>
  );
}
