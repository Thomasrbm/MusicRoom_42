"use client";

import { useState } from "react";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Separator } from "@/components/atoms/Separator";
import { FormField } from "@/components/molecules/FormField";
import { PasswordField } from "@/components/molecules/PasswordField";
import { SocialButton } from "@/components/molecules/SocialButton";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ confirmPassword?: string }>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }
    setErrors({});
    setIsLoading(true);
    // TODO: connect to backend register endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-1.5 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Create your account
        </h1>
        <p className="text-sm text-zinc-400">
          Join MusicRoom and start collaborating
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SocialButton provider="google" />
        <SocialButton provider="facebook" />
      </div>

      <div className="relative flex items-center gap-3">
        <Separator />
        <span className="shrink-0 text-xs text-zinc-500 uppercase tracking-widest">
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="Username"
          type="text"
          placeholder="your_username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />

        <FormField
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <PasswordField
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />

        <PasswordField
          label="Confirm password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors({});
          }}
          autoComplete="new-password"
          error={errors.confirmPassword}
          required
        />

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Creating account…
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Create account
            </span>
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}

export { RegisterForm };
