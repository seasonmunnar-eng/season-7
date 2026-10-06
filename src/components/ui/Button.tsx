import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const base = styles.base;

  const variants: Record<string, string> = {
    primary: styles.primary,
    outline: styles.outline,
    ghost: styles.ghost,
  };

  const classes = [base, variants[variant], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
