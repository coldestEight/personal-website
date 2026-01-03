import React from "react";
import styles from "./verticalNav.module.css";
import Link from "next/link";

export default function VerticalNav() {
  return (
    <a className={styles.verticalNav}>
      <Link className={styles.navBtn} href="/co-op/S24">
        S24
      </Link>
      <Link className={styles.navBtn} href="/co-op/F25">
        F25
      </Link>
      <Link className={styles.navBtn} href="/co-op/W26">
        W26
      </Link>
    </a>
  );
}
