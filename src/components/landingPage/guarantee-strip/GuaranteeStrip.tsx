"use client";

import React from "react";
import { CircleIcon, GUARANTEE_ITEMS } from "./constants";

function splitLines(text: string) {
  return text.split("\n").map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i !== text.split("\n").length - 1 ? <br /> : null}
    </React.Fragment>
  ));
}

export default function GuaranteeStrip() {
  return (
    <section className="w-full bg-white">
      <div className="py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {GUARANTEE_ITEMS.map((item) => (
            <div key={item.id} className="text-center">
              <CircleIcon>
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt ?? item.title}
                  className="h-[20px] md:h-[40px] w-[20px] md:w-[45px] object-contain"
                  draggable={false}
                  loading="lazy"
                />
              </CircleIcon>

              <h3 className="mt-5 text-base md:text-lg xl:text-[24px] font-bold leading-snug text-slate-900">
                {splitLines(item.title)}
              </h3>

              <p className="mt-5 text-sm md:text-base lg:text-[18px] leading-relaxed text-foreground">
                {splitLines(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
