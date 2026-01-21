import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import AuthShell from "../../components/auth/AuthShell";
import AuthCard from "../../components/auth/AuthCard";
import PasswordField from "../../components/auth/PasswordField";

const schema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  keepSignedIn: z.boolean().default(false),
});

type FormValues = z.infer<typeof schema>;

function GoogleIcon() {
  // simple inline svg (no extra dependency)
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.647 32.659 29.209 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.232 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.232 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.132 0 9.86-1.966 13.409-5.159l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.188 0-9.613-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a11.96 11.96 0 0 1-4.084 5.603l.003-.002 6.19 5.238C36.973 39.246 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export default function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      keepSignedIn: true,
    },
    mode: "onSubmit",
  });

  const keepSignedIn = watch("keepSignedIn");

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    console.log("SignIn values:", values);
    navigate("/");
  };

  const onGoogle = async () => {
    console.log("Google login");
  };

  return (
    <AuthShell>
      <AuthCard title="Sign In">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label className="auth-label" htmlFor="email">
              Email Address
            </Label>

            <Input
              id="email"
              autoComplete="email"
              className={`auth-input ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""
                }`}
              {...register("email")}
            />

            {errors.email?.message ? (
              <p className="text-xs text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="auth-label" htmlFor="password">
                Password
              </Label>

              <Link to="/forgot-password" className="auth-link text-base">
                Forgot Password
              </Link>
            </div>

            <PasswordField
              id="password"
              autoComplete="current-password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          {/* Keep signed in */}
          <div className="flex items-center gap-2 pt-1">
            <Checkbox
              id="keepSignedIn"
              checked={keepSignedIn}
              onCheckedChange={(v) => {
                const next = v === true;
                setValue("keepSignedIn", next, {
                  shouldDirty: true,
                  shouldTouch: true,
                  shouldValidate: true,
                });
              }}
            />
            <Label htmlFor="keepSignedIn" className="text-base leading-5 text-gray-700">
              Keep me signed in
            </Label>
          </div>

          <Button
            type="submit"
            className="auth-primary-btn h-12 w-full text-base font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 pt-1">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-500">Or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={onGoogle}
            className="h-12 w-full rounded-xl border border-gray-100 bg-white text-base font-semibold hover:bg-gray-50 hover:text-black"
          >
            <img
              src="/google.svg"
              alt="Google"
              className="mr-3 h-5 w-5"
              loading="lazy"
            />
            Continue with Google
          </Button>

          <div className="pt-2 text-center text-base text-gray-700">
            Don&apos;t have an Account?{" "}
            <Link to="/register" className="auth-link text-primary">
              Sign up here
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
