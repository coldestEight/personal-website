"use client";
import React, { useState } from "react";
import styles from "./projectItem.module.css";

export default function projectItem(
  img = "test.png",
  title = "The Less I Know",
  text = "The Better",
  link = "https://github.com/coldestEight"
) {
  let formattedText = addLineBreak(text);
  return (
    <div className={styles.projectContainer}>
      <img src={"/" + img}></img>
      <div className={styles.textContainer}>
        <a className={styles.projectTitle}>{title}</a>
        <a className={styles.projectText}>{formattedText}</a>
        <a className={styles.projectLinks} href={link}>
          Github
        </a>
      </div>
    </div>
  );
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
