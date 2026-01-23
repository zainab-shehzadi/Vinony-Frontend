"use client";
import { cn } from "@/lib/utils";

type Props = {
    eyebrow: string;
    title: React.ReactNode;
    className?: string;
    eyebrowClassName?: string;
    titleClassName?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    className,
    eyebrowClassName,
    titleClassName,
}: Props) {
    return (
        <div className={cn("text-center", className)}>
            <p
                className={cn(
                    "text-primary font-semibold tracking-[0.16em]",
                    "text-sm md:text-base lg:text-[24px]",
                    eyebrowClassName
                )}
            >
                {eyebrow}
            </p>

            <h2
                className={cn(
                    "mt-2 md:mt-4 lg:mt-6 font-semibold leading-[1.08] text-foreground",
                    "mx-auto w-full max-w-[700px]", 
                    "text-3xl md:text-4xl xl:text-[48px] text-center",
                    titleClassName
                )}
            >
                {title}
            </h2>

        </div>
    );
}
