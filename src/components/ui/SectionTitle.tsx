import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const containerClasses = [
    styles.container,
    align === "center" ? styles.center : "",
  ].filter(Boolean).join(" ");

  const eyebrowClasses = [
    styles.eyebrow,
    dark ? styles.eyebrowDark : styles.eyebrowLight,
    align === "center" ? styles.eyebrowCenter : "",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    styles.title,
    dark ? styles.titleDark : styles.titleLight,
  ].filter(Boolean).join(" ");

  return (
    <div className={containerClasses}>
      <div className={eyebrowClasses}>
        <span className={styles.line} />
        {eyebrow}
      </div>
      <h2 className={titleClasses}>
        {title}
      </h2>
    </div>
  );
}
// /