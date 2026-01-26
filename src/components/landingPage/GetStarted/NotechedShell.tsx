import * as React from "react";
import { cn } from "@/lib/utils";

export function NotchedShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full ">
      {/* ✅ Bottom-only primary glow (outside card) */}
      <div className="pointer-events-none absolute -bottom-1 left-5 right-5 h-2 rounded-full bg-primary/40 blur-sm" />


      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-slate-200 bg-[#F5F5F5] dark:bg-background",
          "[clip-path:polygon(0_0,55%_0,66%_12%,100%_12%,100%_100%,0_100%)]",
          "lg:[clip-path:polygon(0_0,35%_0,45%_18%,100%_18%,100%_100%,0_100%)]"
        )}
      >
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
