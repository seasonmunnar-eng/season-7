import { Service } from "@/types";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={styles.card}>
      <span className={styles.code}>
        {service.code}
      </span>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>
        {service.description}
      </p>
      <ul className={styles.list}>
        {service.points.map((point) => (
          <li
            key={point}
            className={styles.listItem}
          >
            <span className={styles.bullet} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
