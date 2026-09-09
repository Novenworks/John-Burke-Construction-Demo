import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border border-line bg-cream px-4 text-base text-ink placeholder:text-muted",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
      {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
