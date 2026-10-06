import { Botanical, Chapter, Photo, TextLink } from "./ForestPrimitives";
import styles from "./Forest.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.wrap}>
        <div className={styles.chapterHeader}><Chapter>The Season7 way</Chapter><span className={styles.place}>Chithirapuram · Munnar · Kerala</span></div>
        <div className={styles.aboutGrid}>
          <figure className={styles.aboutFigure}>
            <Photo src="intro" alt="A quiet balcony opening onto misty green hills and tea gardens" className={styles.aboutPhoto} sizes="(max-width: 760px) 90vw, 48vw" />
            <figcaption><span>A different kind of everyday.</span><span>Season7, Munnar</span></figcaption>
          </figure>
          <div className={styles.aboutCopy}>
            <h2 id="about-title" className={styles.display}>A resort where nature meets <em>comfort.</em></h2>
            <p className={styles.lead}>A little closer to the hills.<br />A little closer to yourself.</p>
            <p>Set in the green landscape of Chithirapuram, Season7 The Nature Resort brings mountain and valley views into the everyday. Private balconies, comfortable accommodation and personal service make it easy to settle in.</p>
            <div className={styles.natureNote}><Botanical /><p>Rooted in nature.<br /><span>Thoughtful hospitality. Sustainable living.</span></p></div>
            <TextLink href="#accommodation">Find your quiet corner</TextLink>
          </div>
        </div>
        <div className={styles.aboutFoot}><span>Nature is the setting.</span><span>Comfort is in the details.</span><span>The time is yours.</span></div>
      </div>
    </section>
  );
}
