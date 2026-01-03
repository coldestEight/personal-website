"use client";
import React, { useState } from "react";
import styles from "./miniTitle.module.css";

export default function miniTitle(name = "The Quick Brown Fox") {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.miniTitle}>{name}</div>
    </div>
  );
}
