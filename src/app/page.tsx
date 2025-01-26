"use client";

import { useAtom } from "jotai";
import styles from "./page.module.css";
import Link from "next/link";
import { EVENT_ID, event_state } from "@/state/event";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

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
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>TanStackサンプル</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Body className={styles.card_body}>
          <Button variant="primary" href="/tanstack/open_meteo">
            TanStack Queryサンプル
            <br />
            天気履歴取得
          </Button>
          <Button variant="primary" href="/tanstack/virtual_scroll">
            TanStack Virtualサンプル
            <br />
            天気履歴取得
          </Button>
        </Card.Body>
      </Card>

      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>矩形描画</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Body className={styles.card_body}>
          <Button variant="primary" href="/rectangle/konva">
            konva
          </Button>
          <Button variant="primary" href="/rectangle/fabric">
            fabric
          </Button>
        </Card.Body>
      </Card>

      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>Next.js</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Body className={styles.card_body}>
          <Button variant="primary" href="/next/page1">
            Parallel Routes
          </Button>
          <Button variant="primary" href="/">
            ボタン２
          </Button>
        </Card.Body>
      </Card>

      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>テンプレ</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Body className={styles.card_body}>
          <Button variant="primary" href="/">
            ボタン１
          </Button>
          <Button variant="primary" href="/">
            ボタン２
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
