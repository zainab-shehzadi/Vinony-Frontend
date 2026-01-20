import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthShell from "@/components/auth/AuthShell";
import AuthCard from "@/components/auth/AuthCard";
import PasswordField from "@/components/auth/PasswordField";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const schema = z
  .object({
    email: z.string().trim().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
    acceptTerms: z.boolean().refine((v) => v === true, "You must accept terms"),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof schema>;

export default function SignUp() {
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
      confirmPassword: "",
      acceptTerms: true,
    },
  });

  const acceptTerms = watch("acceptTerms");

  const onSubmit = async (values: FormValues) => {
    // TODO: integrate API here
    console.log(values);

    navigate("/login");
  };

  return (
    <AuthShell>
      <AuthCard title="Sign Up">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label className="auth-label" htmlFor="email">
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

          <div className="space-y-2">
            <Label className="auth-label" htmlFor="password">
              Password
            </Label>
            <PasswordField
              id="password"
              placeholder="8+ characters"
              autoComplete="new-password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <div className="space-y-2">
            <Label className="auth-label" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <PasswordField
              id="confirmPassword"
              autoComplete="new-password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <Checkbox
              id="acceptTerms"
              checked={!!acceptTerms}
              onCheckedChange={(v) => setValue("acceptTerms", Boolean(v))}
            />
            <Label htmlFor="acceptTerms" className="text-sm text-gray-700 leading-5">
              By Creating an Account, I accept the{" "}
              <a className="auth-link" href="#" onClick={(e) => e.preventDefault()}>
                Terms and Conditions
              </a>{" "}
              and agree with{" "}
              <a className="auth-link" href="#" onClick={(e) => e.preventDefault()}>
                Privacy Policies
              </a>
              .
            </Label>
          </div>
          {errors.acceptTerms?.message ? <p className="text-xs text-red-600">{errors.acceptTerms.message}</p> : null}

          <Button type="submit" className="auth-primary-btn h-12 text-lg" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Sign In"}
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Sign In here
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
