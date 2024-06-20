"use client";
import React, { useState } from "react";
import styles from "./bodyText.module.css";

export default function bodyText(text = "Lorem Ipsum etc etc....") {
  let formattedText = addLineBreak(text);

  return <div className={styles.bodyText}>{formattedText}</div>;
}

const addLineBreak = (str: string) =>
  str.split("\n").map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });
