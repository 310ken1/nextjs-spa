"use client";

import { useAtom } from "jotai";
import styles from "./page.module.css";
import { EVENT_ID, event_state } from "@/state/event";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

function CardMenu({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <Card.Body className={styles.card_body}>
        {items.map((item, index) => (
          <Button key={index} variant="primary" href={item.href}>
            {item.title}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
}

export default function HomePage() {
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
      <CardMenu
        title="Next.js(React)"
        items={[
          { title: "Parallel Routes", href: "/next/routes" },
          { title: "ボタン２", href: "/" },
        ]}
      />
      <CardMenu
        title="TanStackサンプル"
        items={[
          { title: "TanStack Queryサンプル", href: "/tanstack/open_meteo" },
          {
            title: "TanStack Virtualサンプル",
            href: "/tanstack/virtual_scroll",
          },
        ]}
      />
      <CardMenu
        title="矩形描画"
        items={[
          { title: "konva", href: "/rectangle/konva" },
          { title: "fabric", href: "/rectangle/fabric" },
        ]}
      />
    </div>
  );
}
