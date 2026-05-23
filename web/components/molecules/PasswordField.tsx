"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormField } from "@/components/molecules/FormField";
import type { InputProps } from "@/components/atoms/Input";

interface PasswordFieldProps extends Omit<InputProps, "type"> {
  label: string;
  error?: string;
  containerClassName?: string;
}

function PasswordField({ label, error, containerClassName, ...props }: PasswordFieldProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <FormField
        label={label}
        type={show ? "text" : "password"}
        error={error}
        containerClassName={containerClassName}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        className="absolute right-3 top-8 text-zinc-500 hover:text-zinc-300 transition-colors"
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

export { PasswordField };
