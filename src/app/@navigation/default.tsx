"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./navigation.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function DefaultNavigation() {
  const router = useRouter();
  return (
    <div className={styles.navigation}>
      Default
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
