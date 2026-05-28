import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
}

function NavItem({ href, label, active, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-purple-400",
        active ? "text-purple-400" : "text-zinc-400",
        className
      )}
    >
      {label}
    </Link>
  );
}

export { NavItem };
