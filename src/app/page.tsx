import styles from "./main.module.css";
import Link from "next/link";

export default function Main() {
  return (
    <div className={styles.main}>
      メインコンテンツ
      <p>ここにメインの内容が表示されます。</p>
      <Link href="/page1">Page1</Link>
    </div>
  );
}
