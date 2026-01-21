import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { VINONY_FAQS, type FaqItem } from "@/constants/faq";

type Props = {
    items?: FaqItem[];
    defaultOpenId?: string;
    title?: string;
    subtitle?: string;
};

function Icon({ open }: { open: boolean }) {
    return (
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center text-primary">
            {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
    );
}

export default function VinonyFaq({
    items = VINONY_FAQS,
    defaultOpenId,
    title = "Frequently Asked Questions",
    subtitle = "Vinony Related Questions",
}: Props) {
    const firstId = items[0]?.id ?? "";
    const initial = defaultOpenId ?? firstId;

    const [openId, setOpenId] = React.useState<string>(initial);

    const toggle = React.useCallback((id: string) => {
        setOpenId((prev) => (prev === id ? "" : id));
    }, []);

    if (!items.length) return null;

    return (
        <section className="w-full bg-white">
            <div className="py-10 md:py-16 lg:py-20">
                {/* heading */}
                <div className="text-center">
                    <p className="text-base md:text-lg lg:text-xl font-semibold text-primary ">
                        {subtitle}
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold  md:text-5xl">
                        {title}
                    </h2>
                </div>

                {/* list */}
                <div className="mt-8 md:mt-16 lg:mt-28" role="region" aria-label="Frequently asked questions">
                    {items.map((item) => {
                        const isOpen = openId === item.id;
                        const btnId = `faq-btn-${item.id}`;
                        const panelId = `faq-panel-${item.id}`;

                        return (
                            <div key={item.id} className="border-b border-[#6060606B] py-7">
                                <button
                                    id={btnId}
                                    type="button"
                                    onClick={() => toggle(item.id)}
                                    className="flex w-full items-start justify-between gap-6 text-left"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* purple square */}
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-[2px] bg-primary" />
                                        <span className="text-lg font-semibold text-gray-900 md:text-xl">
                                            {item.question}
                                        </span>
                                    </div>

                                    <Icon open={isOpen} />
                                </button>

                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={btnId}
                                    className={[
                                        "overflow-hidden pl-6 pr-12 text-sm leading-7 text-gray-900 md:text-base transition-[max-height,opacity] duration-300",
                                        isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0",
                                    ].join(" ")}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
