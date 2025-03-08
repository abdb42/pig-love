
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  fullWidth = false,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto px-6 w-full",
        fullWidth ? "" : "max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
