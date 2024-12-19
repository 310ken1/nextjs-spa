import * as React from "react";
import styles from "./page1.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      メインコンテンツ
      <p>ここにメインの内容が表示されます。</p>
      <p>Page2</p>
    </div>
  );
}
