import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ForestStory from "./forest/ForestStory";
import styles from "./ResortExperience.module.css";

export default function ResortExperience() {
  return (
    <main>
      <section id="home" className={styles.hero}>
        <div className={styles.gridBackdrop} />
        <div className={styles.gradientBackdrop} />

        <div className={styles.heroContent}>
          <Container>
            <div className={styles.heroGrid}>
              <div className={styles.textContent}>
                <Reveal>
                  <div className={styles.heroEyebrow}>
                    <span className={styles.eyebrowLine} />
                    SEASON7 NATURAL RESORT · MUNNAR
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <h1 className={styles.heroTitle}>
                    A stay that feels like <em>coming home.</em>
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <h2 className={styles.heroSubheading}>
                    NATURE · HOSPITALITY · QUIET LUXURY
                  </h2>
                </Reveal>

                <Reveal delay={220}>
                  <div className={styles.heroDescription}>
                    <p>Come closer to the green hills of Munnar.</p>
                    <p>
                      Season7 is a warm, unhurried retreat for comfortable rooms, memorable meals and days shaped by the landscape.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={280}>
                  <div className={styles.heroActions}>
                    <a href="#services" className={styles.primaryButton}>Explore the resort</a>
                    <a href="#contact" className={styles.outlineButton}>Plan your stay</a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={180} className={styles.heroGallery}>
                <div className={styles.galleryPanels} aria-label="Explore the resort">
                  {[
                    { image: "season7-munnar-hero.png", label: "The retreat", href: "#about" },
                    { image: "season7-luxury-room.png", label: "Stay", href: "#services" },
                    { image: "season7-dining.png", label: "Dine", href: "#services" },
                    { image: "season7-nature-walk.png", label: "Discover", href: "#experiences" },
                  ].map((panel, index) => (
                    <a key={panel.label} href={panel.href} className={styles.galleryPanel}>
                      <Image src={`/images/${panel.image}`} alt="" fill priority={index < 2}
                        sizes="(max-width: 640px) 50vw, (max-width: 1023px) 40vw, 30vw" />
                      <span className={styles.panelLabel}>{panel.label}</span>
                    </a>
                  ))}
                </div>
                <p className={styles.galleryCaption}>Stay gently. Explore freely.</p>
              </Reveal>
            </div>
          </Container>
        </div>
      </section>
      <ForestStory />
    </main>
  );
}
