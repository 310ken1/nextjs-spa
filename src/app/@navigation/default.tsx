"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./navigation.module.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { EVENT_ID, event_state } from "@/state/event";
import { useAtom } from "jotai";

type NavigationButtonProps = {
  icon: string;
  onClick: () => void;
};

function NavigationButton({ icon, onClick }: NavigationButtonProps) {
  return (
    <Button
      className={`bi ${icon} ${styles.button}`}
      variant="light"
      onClick={() => onClick()}
    ></Button>
  );
}

export default function TopNavigation() {
  const [, setEvent] = useAtom(event_state);
  const router = useRouter();
  const top_area: NavigationButtonProps[] = [
    {
      icon: "bi-house",
      onClick: () => {
        router.push("/");
        setEvent({ id: EVENT_ID.home, param: { name: "トップ：ホーム" } });
      },
    },
    {
      icon: "bi-arrow-clockwise",
      onClick: () => {
        window.location.reload();
        setEvent({ id: EVENT_ID.reload, param: { name: "トップ：リロード" } });
      },
    },
  ];
  const bottom_area: NavigationButtonProps[] = [
    {
      icon: "bi-gear",
      onClick: () => {
        setEvent({ id: EVENT_ID.settings, param: { name: "トップ：設定" } });
      },
    },
  ];
  return (
    <div className={styles.navigation}>
      デフォルト
      <div className={styles.top_area}>
        {top_area.map((button, index) => (
          <NavigationButton key={index} {...button} />
        ))}
      </div>
      <div className={styles.bottom_area}>
        {bottom_area.map((button, index) => (
          <NavigationButton key={index} {...button} />
        ))}
      </div>
    </div>
  );
}
