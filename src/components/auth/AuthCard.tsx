import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <Card className="auth-card">
      <CardHeader className="space-y-2 pt-8">
        <h1 className="auth-title">{title}</h1>
        {subtitle ? <p className="auth-subtitle px-6">{subtitle}</p> : null}
      </CardHeader>

      <CardContent className="pb-8">{children}</CardContent>
    </Card>
  );
}
