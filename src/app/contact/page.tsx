"use client";
import React from "react";
import navbar from "../components/navbar";
import mainTitle from "../components/mainTitle";
import particlesBackground from "../components/particleBackground";

export default function Home() {
  return (
    <>
      {particlesBackground()}
      {navbar()}
      {mainTitle("Contact")}
    </>
  );
}
