import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./navigation.module.css";
import { Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.top_area}>
        <Button
          className={`bi bi-house ${styles.button}`}
          variant="light"
        ></Button>
      </div>
      <div className={styles.bottom_area}>
        <Button
          className={`bi bi-gear ${styles.button}`}
          variant="light"
        ></Button>
      </div>
    </div>
  );
}
