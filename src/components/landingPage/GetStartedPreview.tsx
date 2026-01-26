"use client";

import { cn } from "@/lib/utils";

type Props = {
    imageSrc: string;
    imageAlt?: string;
    onGetStarted?: () => void;
    className?: string;
};

export default function GetStartedPreview({
    imageSrc,
    imageAlt = "Preview",
    onGetStarted,
    className,
}: Props) {
    return (
        <section className={cn("w-full py-6 md:py-10 ", className)}>
            {/* Button */}
            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={onGetStarted}
                    className={cn(
                        "h-10 px-10 lg:px-20 rounded-xl text-white font-medium btn-gradient")}
                >
                    Get Started
                </button>
            </div>

            {/* Preview Card */}
            <div className="px-2 md:px-10 lg:px-20 flex justify-center">

                <img
                    src={imageSrc}
                    alt={imageAlt}
                    draggable={false}
                    loading="lazy"
                    className={cn(
                        "w-full",
                        "h-auto object-contain",
                        "rounded-xl"
                    )}
                />
            </div>


        </section>
    );
}