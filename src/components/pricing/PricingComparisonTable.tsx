"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { BillingCycle, FeatureRow, Plan, PlanId } from "@/types/pricing";
import PricingButton from "./PricingButton";
import BillingToggle from "./BillingToggle";
import { MobilePlanCard } from "./MobilePlanCard";
import { formatPriceUSD } from "@/lib/formatters";
import FeatureCell from "./FeatureCell";

type Props = {
  plans: Plan[];
  features: FeatureRow[];
  defaultCycle?: BillingCycle;
  defaultSelectedPlanId?: PlanId;
  onSelectPlan?: (planId: PlanId, cycle: BillingCycle) => void;
  className?: string;
};

export default function PricingComparisonTable({
  plans,
  features,
  defaultCycle = "monthly",
  defaultSelectedPlanId = "pro",
  onSelectPlan,
  className,
}: Props) {
  const [cycle, setCycle] = React.useState<BillingCycle>(defaultCycle);
  const [selected, setSelected] = React.useState<PlanId>(defaultSelectedPlanId);

  const handleSelect = (planId: PlanId) => {
    setSelected(planId);
    onSelectPlan?.(planId, cycle);
  };

  const isMonthly = cycle === "monthly";
  const suffix = isMonthly ? "/Month" : "/Year";

  return (
    <section className={cn("w-full my-6", className)}>
      <div className="mx-auto">
        <BillingToggle value={cycle} onChange={setCycle} className="mb-16" />

        {/* Mobile */}
        <div className="lg:hidden space-y-4 border border-border divide-y divide-border">
          {plans.map((p) => (
            <MobilePlanCard
              key={p.id}
              plan={p}
              cycle={cycle}
              selected={selected === p.id}
              onSelect={() => handleSelect(p.id)}
              features={features}
            />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="border border-border bg-background px-4 xl:px-16">
            <table className="w-full table-fixed border-collapse">
              <colgroup>
                <col className="w-[28%]" />
                <col className="w-[24%]" />
                <col className="w-[24%]" />
                <col className="w-[24%]" />
              </colgroup>

              <thead>
                <tr className="border-b border-border">
                  <th className="border-r border-border py-6 lg:py-8 px-4 md:px-6 lg:px-8 text-left align-top">
                    <div className="text-[24px] text-foreground">Plans Features</div>
                    <p className="mt-4 lg:mt-6 max-w-[240px] font-medium text-sm lg:text-[16px] leading-6 text-[#858BA0]/80">
                      Choose your workspace plan according to your organisational plan.
                    </p>
                  </th>

                  {plans.map((p, i) => {
                    const price = p.price[cycle];
                    const isSelected = selected === p.id;
                    const isLast = i === plans.length - 1;

                    return (
                      <th
                        key={p.id}
                        className={cn(
                          "py-6 md:py-8 px-4 md:px-6 lg:px-8 text-center align-top",
                          !isLast && "border-r border-border",
                          isSelected ? "bg-primary/5" : ""
                        )}
                      >
                        <div className="relative space-y-4 xl:space-y-6">
                          <div className="text-base md:text-2xl xl:text-[32px] font-bold text-primary">
                            {p.name}
                          </div>

                          <div className="flex items-end justify-center gap-1">
                            <div className="text-2xl lg:text-[32px] font-extrabold text-foreground">
                              {formatPriceUSD(price)}
                            </div>
                            <div className="pb-1 font-medium text-xs lg:text-base text-[#858BA0]/80">{suffix}</div>
                          </div>

                          <div>
                            <PricingButton selected={isSelected} onClick={() => handleSelect(p.id)}>
                              {p.ctaLabel ?? "Choose This Plan"}
                            </PricingButton>
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {features.map((row, rIdx) => {
                  const isLastRow = rIdx === features.length - 1;

                  return (
                    <tr key={row.id} className={cn(!isLastRow && "border-b border-border")}>
                      {/* Feature name column */}
                      <td className="border-r border-border px-4 md:px-6 lg:px-8 lg:py-5 text-left align-middle">
                        <span className="block text-sm md:text-base lg:text-[18px] font-medium text-foreground break-words">
                          {row.label}
                        </span>
                      </td>

                      {/* Plan columns */}
                      {plans.map((p, i) => {
                        const isSelected = selected === p.id;
                        const isLastCol = i === plans.length - 1;

                        return (
                          <td
                            key={p.id}
                            className={cn(
                              "px-4 md:px-6 lg:px-8 py-5 text-center align-middle",
                              !isLastCol && "border-r border-border",
                              isSelected ? "bg-primary/5" : ""
                            )}
                          >
                            <FeatureCell row={row} planId={p.id} />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
