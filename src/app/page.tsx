"use client";

import { useAtom } from "jotai";
import styles from "./page.module.css";
import Link from "next/link";
import { event_state } from "@/state/event";

export default function TopPage() {
  const [event] = useAtom(event_state);
  return (
    <div className={styles.main}>
      <p>Top</p>
      <p>
        EventID: {String(event.id)} Param: {event.param.name}
      </p>
      <Link href="/page1">Page1</Link>
    </div>
  );
}
