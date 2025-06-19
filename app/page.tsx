import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>Component Performance Test</h1>

        <Link className={styles.button} href="/slow-component">
          Slow Component
        </Link>
        <Link className={styles.button} href="/optimized-component">
          Optimized Component
        </Link>
      </main>
    </div>
  );
}
