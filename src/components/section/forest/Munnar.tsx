import Image from "next/image";
import { Arrow, Chapter } from "./ForestPrimitives";
import styles from "./Forest.module.css";

const places = ["Wonder Valley Adventure Park", "Power House Waterfalls", "Chokramudi Peak"];

export default function Munnar() {
  return (
    <section id="munnar" className={styles.munnar} aria-labelledby="munnar-title">
      <Image src="/images/forest/munnar.webp" alt="Lush tea gardens, a waterfall and mist-covered hills in the Munnar landscape" fill sizes="100vw" className={styles.landscape} />
      <div className={styles.cinematicShade} />
      <div className={`${styles.wrap} ${styles.munnarContent}`}>
        <Chapter>Beyond the resort</Chapter>
        <div className={styles.munnarHeading}><span className={styles.eyebrow}>Kerala&apos;s green highlands</span><h2 id="munnar-title">Munnar.<br /><em>Let it move you.</em></h2><p>Follow your curiosity into the landscape.<br />There is a little wonder in every direction.</p></div>
        <div className={styles.places}>{places.map((place) => <a key={place} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place} Munnar Kerala`)}`} target="_blank" rel="noopener noreferrer"><span>{place}</span><Arrow diagonal /></a>)}</div>
      </div>
    </section>
  );
}
