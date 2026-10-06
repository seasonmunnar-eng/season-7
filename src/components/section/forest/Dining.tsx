import { Chapter, Photo } from "./ForestPrimitives";
import styles from "./Forest.module.css";

export default function Dining() {
  return (
    <section id="dining" className={styles.dining} aria-labelledby="dining-title">
      <div className={styles.wrap}>
        <Chapter>At the table</Chapter>
        <div className={styles.diningHeading}><h2 id="dining-title" className={styles.display}>Good food.<br /><em>Even better company.</em></h2><p>Unhurried meals.<br />Conversations that carry on.<br />A little taste of your time away.</p></div>
        <div className={styles.restaurantGrid}>
          <Photo src="dining" alt="A warmly lit restaurant table with a variety of dishes and a view across the hills" className={styles.diningPhoto} />
          <div className={styles.restaurantCopy}><span className={styles.eyebrow}>Multi-cuisine restaurant</span><h3>Pull up<br /><em>a chair.</em></h3><p>Local flavours and familiar favourites, brought together at our multi-cuisine restaurant. Good company makes every meal a little more memorable.</p><span className={styles.smallRule} /></div>
        </div>
        <div className={styles.coolBarRow}>
          <div className={styles.coolBarCopy}><span className={styles.eyebrow}>Cool Bar</span><h3>A pause,<br /><em>refreshingly simple.</em></h3><p>Take a break between the day&apos;s little adventures. Our Cool Bar is an invitation to refresh, linger and take it all in.</p></div>
          <figure className={styles.tableFigure}><Photo src="table" alt="An unhurried meal and refreshments on a terrace surrounded by green hills" className={styles.tablePhoto} sizes="(max-width: 760px) 90vw, 36vw" /><figcaption>For the moments between plans.</figcaption></figure>
          <span className={styles.verticalNote}>Savour the slower things</span>
        </div>
      </div>
    </section>
  );
}
