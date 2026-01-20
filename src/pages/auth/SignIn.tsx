import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
  keepSignedIn: z.boolean().optional().default(false),
});

type FormValues = z.infer<typeof schema>;

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
    defaultValues: { email: "", password: "", keepSignedIn: true },
  });

  const keepSignedIn = watch("keepSignedIn");

  const onSubmit = async (values: FormValues) => {
    console.log(values);

    navigate("/dashboard");
  };

  return (
    <AuthShell>
      <AuthCard title="Sign In">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label className="auth-label" htmlFor="email">
              Email Address
            </Label>
            <Input
              id="email"
              className={`auth-input ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              placeholder=""
              autoComplete="email"
              {...register("email")}
            />
            {errors.email?.message ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
          </div>

          <div className="space-y-2 md:pt-4">
            <div className="flex items-center justify-between">
              <Label className="auth-label" htmlFor="password">
                Password
              </Label>
              <Link to="/forgot-password" className="auth-link text-sm">
                Forgot Password
              </Link>
            </div>

            <PasswordField
              id="password"
              placeholder=""
              autoComplete="current-password"
              {...register("password")}
              error={errors.password?.message}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="keepSignedIn"
              checked={!!keepSignedIn}
              onCheckedChange={(v) => setValue("keepSignedIn", Boolean(v))}
            />
            <Label htmlFor="keepSignedIn" className="text-sm text-gray-700">
              Keep me signed in
            </Label>
          </div>

          <Button type="submit" className="auth-primary-btn text-lg h-12" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an Account?{" "}
            <Link to="/register" className="auth-link">
              Signup here
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthShell>
  );
}
