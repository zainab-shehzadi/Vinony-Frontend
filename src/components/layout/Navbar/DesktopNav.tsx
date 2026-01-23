import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/navbar";

export default function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden lg:flex items-center justify-center">
      {/* pill container */}
      <div className="rounded-full bg-[#F1E4FF]/90 px-8 py-3 shadow-sm">
        <ul className="flex items-center gap-10">
          {items.map((item) => (
            <li key={item.key}>
              <NavLink
                to={item.href}
                end
                className={({ isActive }) =>
                  cn(
                    "relative inline-flex items-center gap-1 text-[18px] font-medium transition",
                    "px-2 py-1", 
                    isActive ? "text-primary" : "text-black hover:text-primary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={cn(
                        "relative",
                        isActive &&
                          "after:absolute after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:h-[3px] after:w-[40px] after:rounded-full after:bg-primary after:shadow-[0_20px_50px_rgba(124,58,237,0.35)]"
                      )}
                    >
                      {item.label}
                    </span>

                    {item.hasDropdown ? (
                      <ChevronDown
                        size={16}
                        className={cn("mt-[1px]", isActive ? "text-primary" : "text-black")}
                      />
                    ) : null}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
