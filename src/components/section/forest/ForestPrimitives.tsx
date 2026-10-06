import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./Forest.module.css";

export function Chapter({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}><span className={styles.chapterLine} />{children}</p>;
}

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.2" /></svg>;
}

export function TextLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return <a className={styles.textLink} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}<Arrow diagonal={external} /></a>;
}

export function Photo({ src, alt, className = "", sizes = "(max-width: 760px) 100vw, 60vw" }: { src: string; alt: string; className?: string; sizes?: string }) {
  return <div className={`${styles.photo} ${className}`}><Image src={`/images/forest/${src}.webp`} alt={alt} fill sizes={sizes} /></div>;
}

export function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg className={`${styles.botanical} ${className}`} viewBox="0 0 120 190" fill="none" aria-hidden="true">
      <path d="M55 183C49 137 57 80 75 12M58 152C33 143 16 124 16 103c25 5 38 23 42 49ZM56 125c23-8 40-23 43-43-22 2-39 19-43 43ZM60 99C38 89 28 70 31 51c21 8 31 27 29 48ZM67 65c20-7 34-22 34-41-18 6-31 20-34 41ZM74 29C65 18 65 8 72 2c8 7 10 17 2 27Z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
