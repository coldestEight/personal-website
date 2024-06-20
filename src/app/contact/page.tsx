"use client";
import React from "react";
import navbar from "../components/navbar";
import mainTitle from "../components/mainTitle";
import particlesBackground from "../components/particleBackground";
import bodyText from "../components/bodyText";
import contacts from "../components/contacts";

export default function Home() {
  return (
    <>
      {particlesBackground()}
      {navbar()}
      {mainTitle("Contact", "")}
      {bodyText(
        "Hey There!\nIf you have a project to discuss, an opportunity, or just want to connect, feel free to reach out to me through any of the below channels. "
      )}
      {contacts()}
    </>
  );
}
