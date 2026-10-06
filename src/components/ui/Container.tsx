import styles from "./Container.module.css";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const classes = [styles.container, className].filter(Boolean).join(" ");
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
