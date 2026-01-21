import * as React from "react";
import type { ModelCardData } from "@/types/model";
import { Button } from "@/components/ui/button";

function TagPill({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center rounded-full border border-accent/40 bg-white px-4 py-2 text-sm md:text-base text-[#5E5D66]">
            {label}
        </span>
    );
}

type Props = {
    item: ModelCardData;
    onTry?: (id: string) => void;
};

export default function ModelCard({ item, onTry }: Props) {
    const handleTry = () => {
        item.onTry?.(item.id);
        onTry?.(item.id);
    };

    return (
        <div className="rounded-2xl border border-accent/30 bg-white p-6 shadow-sm">
            {/* top row */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-base font-semibold text-foreground md:text-lg lg:text-2xl">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-accent md:text-base">{item.provider}</p>
                </div>

                <div className="text-right">
                    <div className="text-sm font-medium text-foreground md:text-base lg:text-lg">
                        <span className="text-foreground">{item.credits}</span>{" "}
                        <span className="text-foreground">{item.creditsUnit.split("/")[0]}/</span>
                        <span className="text-accent">{item.creditsUnit.split("/")[1]}</span>
                    </div>
                </div>
            </div>

            {/* description */}
            <p className="mt-5 text-sm md:text-base leading-6 text-accent">{item.description}</p>

            {/* tags */}
            <div className="mt-5 flex flex-wrap gap-3">
                {item.tags.slice(0, 4).map((t) => (
                    <TagPill key={t.id} label={t.label} />
                ))}
            </div>

            {/* cta */}
            <Button
                type="button"
                onClick={handleTry}
                className="btn-gradient mt-6 h-12 w-full rounded-xl text-sm md:text-base lg:text-lg  font-semibold text-white"
            >
                {item.ctaLabel ?? "Try Now"}
            </Button>
        </div>
    );
}
