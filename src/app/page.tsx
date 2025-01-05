import styles from "./page.module.css";
import Link from "next/link";

export default function TopPage() {
  return (
    <div className={styles.main}>
      <p>Top</p>
      <Link href="/page1">Page1</Link>
    </div>
  );
}
