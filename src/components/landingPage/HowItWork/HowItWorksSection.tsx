"use client";

import { cn } from "@/lib/utils";
import HowItWorksCard from "./HowItWorksCard";
import { HOW_IT_WORKS } from "@/constants/landingPage";
import SectionHeading from "@/components/common/SectionHeading";

type Props = {
  className?: string;
};

export default function HowItWorksSection({ className }: Props) {
  return (
    <section className={cn("w-full bg-white", className)}>
      <div className=" py-14 md:py-16 lg:py-24">
        <div className="mb-10 text-center sm:mb-12">
          <SectionHeading
            eyebrow="Why use gpt 4.0"
            title="Best Use Cases"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <HowItWorksCard
              key={item.title}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
            />
          ))}
        </div>
           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-16">
          {HOW_IT_WORKS.map((item) => (
            <HowItWorksCard
              key={item.title}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
