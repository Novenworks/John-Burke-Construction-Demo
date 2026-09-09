import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-medium tracking-wide uppercase transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-paper hover:bg-ink-2 active:scale-[0.98]",
        steel:
          "bg-steel text-paper hover:bg-steel-2 active:scale-[0.98]",
        outline:
          "border border-line bg-transparent text-ink hover:border-ink hover:bg-paper-2",
        ghost:
          "bg-transparent text-paper hover:bg-paper/10",
        invert:
          "bg-paper text-ink hover:bg-cream active:scale-[0.98]",
        link: "normal-case tracking-normal font-sans font-medium text-steel underline-offset-4 hover:underline px-0",
      },
      size: {
        default: "h-12 px-5 text-[0.8125rem]",
        sm: "h-10 px-4 text-[0.75rem]",
        lg: "h-14 px-7 text-[0.875rem]",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
