import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NavItem } from "@/types/navbar";

export default function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden lg:flex items-center justify-center">
      <div className="rounded-full bg-[#F1E4FF] px-8 py-4 shadow-sm">
        <ul className="flex items-center gap-10">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                to={item.href}
                className="inline-flex items-center gap-1 text-[18px] text-black font-medium hover:text-primary transition"
              >
                {item.label}
                {item.hasDropdown ? (
                  <ChevronDown size={16} className="mt-[1px]" />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
