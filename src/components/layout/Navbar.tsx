"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 980px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", close);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", close);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${open ? styles.headerOpen : ""}`}>
        <div className={styles.inner}>
          <Link href="/" onClick={() => setOpen(false)} className={styles.logo} aria-label="Season7 Natural Resort Munnar home">
            <Image
              src="/images/season7-forest-logo-transparent-v3.png"
              alt="Season7 The Nature Resort logo"
              className={styles.logoImg}
              width={220}
              height={90}
              priority
            />
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.link}
              >
                {link.label}
              </Link>
            ))}
          </nav>


          <button
            ref={menuButton}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={styles.menuBtn}
          >
            <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpenBottom : ""}`} />
          </button>
        </div>

          <div id="mobile-navigation" className={styles.mobileMenu} inert={!open} aria-hidden={!open}>
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={styles.mobileLink}
                >
                  {link.label}
                </Link>
              ))}

            </nav>
          </div>
    </header>
  );
}
