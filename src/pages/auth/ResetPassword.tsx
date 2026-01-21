import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AuthShell from "../../components/auth/AuthShell";
import AuthCard from "../../components/auth/AuthCard";
import PasswordField from "../../components/auth/PasswordField";

const schema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormValues = z.infer<typeof schema>;

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { password: "", confirmPassword: "" },
  });
  const navigate = useNavigate();

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <AuthShell>
      <AuthCard
        title="Reset Password"
        subtitle="Enter your email and we’ll send you a verification code to reset your password."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label className="auth-label text-base" htmlFor="password">
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

          <div className="space-y-1">
            <Label className="auth-label text-base" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <PasswordField
              id="confirmPassword"
              autoComplete="new-password"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>

          <Button type="submit" onClick={() => navigate("/login")}  className="auth-primary-btn h-12 w-full text-lg font-semibold" disabled={isSubmitting}>
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </Button>

          <div className="text-center md:text-lg text-accent pt-2">
            Remember Password?{" "}
            <Link to="/login" className="auth-link text-secondary font-medium">
              Sign In
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
