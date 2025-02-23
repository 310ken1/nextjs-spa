import * as React from "react";
import styles from "./page1.module.css";
import Link from "next/link";

export default function Page1() {
  return (
    <div className={styles.main}>
      <p>ページ１画面</p>
      <Link href="/">Top</Link>
      <p>↑ヘッダがデフォルトヘッダに戻らない</p>
    </div>
  );
}
