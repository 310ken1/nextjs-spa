"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../navigation.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { EVENT_ID, event_state } from "@/state/event";
import { useAtom } from "jotai";

export default function Page1Navigation() {
  const [, setEvent] = useAtom(event_state);
  const router = useRouter();
  return (
    <div className={styles.navigation}>
      Page1
      <div className={styles.top_area}>
        <Button
          className={`bi bi-house ${styles.button}`}
          variant="light"
          onClick={() =>
            setEvent({ id: EVENT_ID.home, param: { name: "ページ１：ホーム" } })
          }
        ></Button>
        <Button
          className={`bi bi-arrow-clockwise ${styles.button}`}
          variant="light"
          onClick={() =>
            setEvent({
              id: EVENT_ID.reload,
              param: { name: "ページ１：リロード" },
            })
          }
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
