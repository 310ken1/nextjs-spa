"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./navigation.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { EVENT_ID, event_state } from "@/state/event";
import { useAtom } from "jotai";

export default function TopNavigation() {
  const [, setEvent] = useAtom(event_state);
  const router = useRouter();
  return (
    <div className={styles.navigation}>
      Top
      <div className={styles.top_area}>
        <Button
          className={`bi bi-house ${styles.button}`}
          variant="light"
          onClick={() =>
            setEvent({ id: EVENT_ID.home, param: { name: "トップ：ホーム" } })
          }
        ></Button>
        <Button
          className={`bi bi-arrow-clockwise ${styles.button}`}
          variant="light"
          onClick={() =>
            setEvent({
              id: EVENT_ID.reload,
              param: { name: "トップ：リロード" },
            })
          }
        ></Button>
        <Button
          className={`bi bi-brightness-low-fill ${styles.button}`}
          variant="light"
          onClick={() => router.push("/open_meteo")}
        ></Button>
        <Button
          className={`bi bi-arrow-down-up ${styles.button}`}
          variant="light"
          onClick={() => router.push("/virtual_scroll")}
        ></Button>
        <Button
          className={`bi bi-back ${styles.button}`}
          variant="light"
          onClick={() => router.push("/konva")}
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
