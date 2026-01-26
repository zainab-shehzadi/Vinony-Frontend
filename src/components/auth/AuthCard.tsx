import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <Card className="w-full max-w-[460px] rounded-lg border bg-white shadow-lg">
      <CardHeader className="space-y-2 pt-8">
        <h1 className="text-center text-xl md:text-[24px] xl:text-3xl font-semibold text-black">{title}</h1>
        {subtitle ? <p className="auth-subtitle md:text-[16px]">{subtitle}</p> : null}
      </CardHeader>

      <CardContent className="pb-4 md:pb-8 ">{children}</CardContent>
    </Card>
  );
}
