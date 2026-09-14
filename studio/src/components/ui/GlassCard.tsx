import type { HTMLAttributes } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
};

/**
 * Reserved for the handful of moments that should feel "elevated" —
 * not applied to every card on the page. See design notes in README.
 */
export function GlassCard({ glow = false, className = "", children, ...props }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white/[0.03] backdrop-blur-xl ${
        glow ? "shadow-glow-sm" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
