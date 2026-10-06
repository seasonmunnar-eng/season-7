"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import styles from "./Loader.module.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`${styles.loader} ${loading ? styles.visible : styles.hidden}`}
    >
      <div className={styles.title}>{site.name}</div>
      <div className={styles.llc}>THE NATURE RESORT</div>
      
      {/* Animated Loading Bar */}
      <div className={styles.barContainer}>
        <div className={styles.barInner} />
      </div>
    </div>
  );
}
