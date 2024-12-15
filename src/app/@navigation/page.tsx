import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <button className={`bi bi-house ${styles.button_icon}`}></button>
      <button className={`bi bi-gear ${styles.button_icon}`}></button>
    </div>
  );
}
