"use client";
import React, { useState } from "react";
import styles from "./mainTitle.module.css";

export default function mainTitle(
  name = "The Quick Brown Fox",
  subtitle = "Jumped Over The Lazy Dog"
) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.mainTitle}>{name}</div>
      <div className={styles.mainSubtitle}>{subtitle}</div>
    </div>
  );
}
