"use client";
import React from "react";
import styles from "./imgCaption.module.css";

type ImgCaptionProps = {
  imgsrc?: string[];
  caption?: string;
};

export default function ImgCaption({
  imgsrc = ["test.png"],
  caption = "Lorem Ipsum",
}: ImgCaptionProps) {
  return (
    <div className={styles.imgCaption}>
      <div className={styles.imageGrid}>
        {imgsrc.map((src, index) => (
          <img key={index} src={src} alt={`image-${index}`} />
        ))}
      </div>

      <div className={styles.caption}>{caption}</div>
    </div>
  );
}
