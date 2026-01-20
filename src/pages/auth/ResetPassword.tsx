import { Link } from "react-router-dom";
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

  const onSubmit = async (values: FormValues) => {
    // TODO: integrate API to reset password (token in URL, etc.)
    console.log(values);
  };

  return (
    <AuthShell>
      <AuthCard
        title="Reset Password"
        subtitle="Duis sagittis molestie tellus, at eleifend sapien pellque quis. Fusce lorem nunc, fringilla sit amet nunc."
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <Button type="submit" className="auth-primary-btn" disabled={isSubmitting}>
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </Button>

          <div className="text-center text-sm text-gray-600">
            Remember Password?{" "}
            <Link to="/login" className="auth-link">
              Sign In
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
