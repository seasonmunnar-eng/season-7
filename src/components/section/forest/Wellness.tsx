import { Botanical, Chapter, Photo } from "./ForestPrimitives";
import styles from "./Forest.module.css";

export default function Wellness() {
  return (
    <section id="wellness" className={styles.wellness} aria-labelledby="wellness-title">
      <div className={styles.wrap}>
        <Chapter>The art of doing less</Chapter>
        <div className={styles.wellnessGrid}>
          <div className={styles.wellnessHeading}><h2 id="wellness-title" className={styles.display}>Make room<br />for <em>stillness.</em></h2><Botanical /><p>No rush. No full agenda.<br />Just a little time for yourself.</p></div>
          <figure className={styles.poolFigure}><Photo src="pool" alt="Calm swimming pool overlooking forested hills in the morning mist" className={styles.poolPhoto} /><figcaption><span>Swimming Pool</span><span>A slower kind of afternoon.</span></figcaption></figure>
          <figure className={styles.spaFigure}><Photo src="spa" alt="A quiet wellness room with soft natural light and views of the hills" className={styles.spaPhoto} sizes="(max-width: 760px) 75vw, 34vw" /></figure>
          <div className={styles.spaCopy}><span className={styles.eyebrow}>Spa &amp; Wellness</span><h3>A deep breath.<br /><em>A softer pace.</em></h3><p>Let the day slow down. Make space for rest and wellbeing, surrounded by the calm of nature.</p><span className={styles.smallRule} /></div>
        </div>
      </div>
    </section>
  );
}
