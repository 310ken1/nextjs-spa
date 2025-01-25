"use client";

import { useAtom } from "jotai";
import styles from "./page.module.css";
import Link from "next/link";
import { EVENT_ID, event_state } from "@/state/event";
import { useEffect } from "react";

export default function TopPage() {
  const [event] = useAtom(event_state);
  useEffect(() => {
    switch (event.id) {
      case EVENT_ID.home:
        console.log("トップ：ホーム");
        break;
      case EVENT_ID.reload:
        console.log("トップ：リロード");
        break;
    }
  }, [event]);
  return (
    <div className={styles.main}>
      <p>トップ画面</p>
      <p>
        EventID: {String(event.id)} Param: {event.param.name}
      </p>
      <Link href="/page1">Page1</Link>
    </div>
  );
}
