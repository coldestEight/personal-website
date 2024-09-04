"use client";
import React, { useState } from "react";
import styles from "./imgCaption.module.css";

export default function imgCaption(
  imgsrc = "test.png",
  caption = "Lorem Ipsum"
) {
  return (
    <div className={styles.imgCaption}>
      <img src={imgsrc} />
      {caption}
    </div>
  );
}
