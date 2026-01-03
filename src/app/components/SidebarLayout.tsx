"use client";
import React from "react";
import VerticalNav from "./verticaNav";
import styles from "./SidebarLayout.module.css";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <VerticalNav />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
