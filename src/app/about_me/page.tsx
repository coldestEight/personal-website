"use client";
import React from "react";
import navbar from "../components/navbar";
import mainTitle from "../components/mainTitle";
import particlesBackground from "../components/particleBackground";
import bodyText from "../components/bodyText";

export default function Home() {
  return (
    <>
      {particlesBackground()}
      {navbar()}
      {mainTitle("About Me", "")}
      {bodyText(
        "Hey, my name's Shaheer! I'm currently a 3rd year Software Engineering student at the University of Guelph. I have a passion for tackling new problems and designing practical solutions to everyday issues.\n\nI'm always looking for opportunities to expand my knowledge and skills through personal projects and academic work.\n\nIn my spare time, I enjoy experimenting with new tech and staying updated with the latest trends in software development. If you share similar interests or have exciting projects to discuss, feel free to reach out!"
      )}
    </>
  );
}
