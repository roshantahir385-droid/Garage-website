import type { AnchorHTMLAttributes, ButtonHTMLAttributes, RefObject } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type SharedProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a";
  };

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as: "button";
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ease-cinematic will-change-transform";

function getStyles(variant: "primary" | "secondary" = "primary") {
  return variant === "primary"
    ? "bg-accent text-white hover:bg-accent-soft shadow-glow-sm hover:shadow-glow"
    : "border border-line text-ink hover:border-accent/50 hover:text-white";
}

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const styles = `${base} ${getStyles(variant)} ${className}`;

  // A gentle magnetic pull toward the cursor — skipped automatically on
  // touch devices and under reduced motion, see useMagnetic.
  const magneticRef = useMagnetic<HTMLAnchorElement | HTMLButtonElement>();

  if (props.as === "button") {
    const { as: _as, ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={magneticRef as unknown as RefObject<HTMLButtonElement>}
        className={styles}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }

  const { as: _as, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
  return (
    <a ref={magneticRef as unknown as RefObject<HTMLAnchorElement>} className={styles} {...anchorProps}>
      {children}
    </a>
  );
}
