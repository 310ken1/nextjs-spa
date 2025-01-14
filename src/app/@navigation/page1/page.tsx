"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../navigation.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Page1Navigation() {
  const router = useRouter();
  return (
    <div className={styles.navigation}>
      Page1
      <div className={styles.top_area}>
        <Button
          className={`bi bi-house ${styles.button}`}
          variant="light"
          onClick={() => router.push("/")}
        ></Button>
        <Button
          className={`bi bi-arrow-clockwise ${styles.button}`}
          variant="light"
          onClick={() => window.location.reload()}
        ></Button>
        <Button
          className={`bi bi-brightness-low-fill ${styles.button}`}
          variant="light"
          onClick={() => router.push("/open_meteo")}
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
