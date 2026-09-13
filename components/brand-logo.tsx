import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  size?: number;
  priority?: boolean;
};

export function BrandLogo({
  className,
  markClassName,
  showWordmark = true,
  size = 28,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/mark.png"
        alt=""
        width={size}
        height={size}
        priority={priority}
        className={cn("shrink-0 object-contain", markClassName)}
        aria-hidden
      />
      {showWordmark ? (
        <span className="truncate text-[1.05rem] font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
          Tiny Atlas
        </span>
      ) : null}
    </span>
  );
}
