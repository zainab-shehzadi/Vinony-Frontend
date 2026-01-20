import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export default function PasswordField({ error, ...props }: Props) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="space-y-1">
      <div className="relative">
        <Input
          {...props}
          type={show ? "text" : "password"}
          className={`auth-input pr-10 ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setShow((s) => !s)}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-gray-700"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </Button>
      </div>

      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
