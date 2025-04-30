"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const handleNavigation = (url: string) => {
    router.push(url);
  };

  return (
    <div className={styles.navbar}>
      <button onClick={() => handleNavigation("/")}>Home</button>
      <button onClick={() => handleNavigation("/about_me")}>About Me</button>
      <button onClick={() => handleNavigation("/projects")}>Projects</button>
      <button onClick={() => handleNavigation("/contact")}>Contact</button>
    </div>
  );
}
