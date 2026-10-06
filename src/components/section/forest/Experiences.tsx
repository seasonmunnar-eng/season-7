import Image from "next/image";
import styles from "./Experiences.module.css";

const experiences = [
  {
    id: "kids-play",
    title: "Kids Play Area",
    description:
      "A little space for big imaginations. Let the youngest guests find their own kind of holiday in the kids play area.",
  },
  {
    id: "campfire",
    title: "Campfire Nights",
    description:
      "Gather around the warmth, share a story and linger a little longer. Some of the best holiday moments happen together.",
  },
  {
    id: "bicycle",
    title: "Bicycle Rides",
    description:
      "Find a different rhythm on two wheels. A bicycle ride brings a little movement and a fresh perspective to your stay.",
  },
  {
    id: "jeep",
    title: "Jeep Safari",
    description:
      "For the part of you that wants to explore. Make a jeep safari part of your Munnar story.",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className={styles.section}
      aria-labelledby="experiences-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            THE ART OF SPENDING TIME
          </p>
          <h2 id="experiences-heading" className={styles.heading}>
            A little wild.
            <em>A little wonder.</em>
          </h2>
          <p className={styles.intro}>
            Follow your curiosity. From small adventures to evenings together,
            there is more than one way to make the day your own.
          </p>

          <div className={styles.experiences}>
            {experiences.map((experience) => (
              <details
                key={experience.id}
                name="season7-experiences"
                className={styles.experience}
                open={experience.id === "campfire"}
              >
                <summary className={styles.summary}>
                  <h3>{experience.title}</h3>
                  <span className={styles.toggle} aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M4 7l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className={styles.description}>{experience.description}</p>
              </details>
            ))}
          </div>
          <p className={styles.footnote}>OUTSIDE THE EVERYDAY. TOGETHER IN NATURE.</p>
        </div>

        <figure className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/forest/campfire.webp"
              alt="Friends gathered around a glowing campfire beneath the night sky"
              fill
              sizes="(max-width: 760px) 90vw, (max-width: 1600px) 43vw, 640px"
              className={styles.image}
            />
            <span className={styles.imageLabel}>GOOD COMPANY. OPEN SKIES.</span>
          </div>
          <figcaption className={styles.caption}>
            <span>After the sun goes down</span>
            <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 2v24M2 14h24M5.5 5.5l17 17m-17 0 17-17" />
            </svg>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
