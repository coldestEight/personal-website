"use client";
import React, { useState } from "react";
import styles from "./contacts.module.css";

export default function contacts() {
  return (
    <div className={styles.contacts}>
      <a href="https://www.linkedin.com/in/shaheer-khan-47b112251/">LinkedIn</a>{" "}
      / <a href="https://github.com/coldestEight">GitHub</a> /
      <a href="mailto:me@shaheer-khan.dev">Email: me@shaheer-khan.dev</a>
    </div>
  );
}
