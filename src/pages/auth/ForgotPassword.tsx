import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().trim().email("Invalid email address"),
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });
  const navigate = useNavigate();

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <AuthShell>
      <AuthCard
        title="Forgot Password"
        subtitle="Enter the email address or mobile phone number associated with your account."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label className="auth-label text-base" htmlFor="email">
              Email Address
            </Label>
            <Input
              id="email"
              className={`auth-input ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              autoComplete="email"
              {...register("email")}
            />
            {errors.email?.message ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
          </div>

    
          <Button type="submit" onClick={() => navigate("/reset-password")} className="auth-primary-btn h-12 text-lg " disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Code"}
          </Button>


          <div className="md:text-lg text-[#81878C] space-y-1 md:py-2">
            <div>
              Already have account?{" "}
              <Link to="/login" className="auth-link text-secondary">
                Sign In
              </Link>
            </div>
            <div>
              Don&apos;t have account?{" "}
              <Link to="/register" className="auth-link text-secondary">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="auth-divider " />

          <p className=" auth-helper md:pt-4 md:text-lg text-[#5B5D5E]">
            You may contact{" "}
            <a className="auth-link text-primary" href="#" onClick={(e) => e.preventDefault()}>
              Customer Service
            </a>{" "}
            for help restoring access to your account.
          </p>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
