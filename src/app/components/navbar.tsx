"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";

function home() {
  window.location.href = "../";
}

function aboutMe() {
  window.location.href = "../about_me";
}

function projects() {
  window.location.href = "../projects";
}

function contact() {
  window.location.href = "../contact";
}

function coop() {
  window.location.href = "../co-op";
}

export default function navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <button onClick={() => home()}>Home</button>
        <button onClick={() => aboutMe()}>About Me</button>
        <button onClick={() => projects()}>Projects</button>
        <button onClick={() => coop()}>Co-op</button>
        <button onClick={() => contact()}>Contact</button>
      </div>
    </>
  );
}
