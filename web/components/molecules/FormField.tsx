import * as React from "react";
import { Label } from "@/components/atoms/Label";
import { Input, type InputProps } from "@/components/atoms/Input";
import { cn } from "@/lib/utils";

interface FormFieldProps extends InputProps {
  label: string;
  error?: string;
  containerClassName?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, containerClassName, id, ...props }, ref) => {
    const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        <Label htmlFor={fieldId}>{label}</Label>
        <Input id={fieldId} ref={ref} {...props} />
        {error && (
          <p className="text-xs text-red-400 mt-0.5">{error}</p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";

export { FormField };
