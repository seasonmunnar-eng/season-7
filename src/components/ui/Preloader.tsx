"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5s
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1500);

    // Completely remove from DOM after 2.2s to allow fade transition
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`${styles.preloader} ${fading ? styles.fadeOut : ""}`}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/season7-forest-logo-transparent-v3.png"
          alt="Season7 Logo"
          width={160}
          height={160}
          className={styles.logo}
          priority
        />
      </div>
    </div>
  );
}
