import { Chapter, Photo, TextLink } from "./ForestPrimitives";
import styles from "./Forest.module.css";

const comforts = [
  ["Your own balcony", "Step outside. Take in the mountain and valley views."],
  ["Comfort, considered", "En-suite bathrooms and modern amenities, close at hand."],
  ["An easy beginning", "Complimentary breakfast to start the day at your own pace."],
];

export default function Accommodation() {
  return (
    <section id="services" className={styles.accommodation} aria-labelledby="stay-title">
      <div id="accommodation" className={styles.wrap}>
        <div className={styles.stayHeader}><Chapter>Stay among the green</Chapter><h2 id="stay-title" className={styles.display}>Wake up <em>somewhere wonderful.</em></h2></div>
        <div className={styles.stayComposition}>
          <Photo src="cottage" alt="Warm cottage bedroom with a private balcony facing the green hills" className={styles.cottagePhoto} sizes="(max-width: 760px) 100vw, 72vw" />
          <div className={styles.stayPanel}>
            <span className={styles.eyebrow}>Your Munnar hideaway</span>
            <h3>A/C &amp; Non A/C<br /> <em>Cottages</em></h3>
            <p>Room to unwind. A balcony to linger on. Choose the comfort that feels right for your stay in the hills.</p>
            <TextLink href="#cottage-details">Explore Cottages</TextLink>
          </div>
          <span className={styles.staySideNote}>Rest comes naturally here</span>
        </div>
        <div id="cottage-details" className={styles.cottageDetails}>
          <Photo src="balcony" alt="A cup of tea on a private balcony overlooking the Munnar landscape" className={styles.balconyPhoto} sizes="(max-width: 760px) 40vw, 20vw" />
          <div className={styles.comfortList}>
            {comforts.map(([title, body]) => <div className={styles.comfort} key={title}><div><h3>{title}</h3><p>{body}</p></div></div>)}
            <TextLink href="#contact">Enquire about your stay</TextLink>
          </div>
          <p className={styles.stayQuote}>Less hurry.<br />More <em>here.</em></p>
        </div>
      </div>
    </section>
  );
}
