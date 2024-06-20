"use client";
import React from "react";
import navbar from "../components/navbar";
import particlesBackground from "../components/particleBackground";
import projectItem from "../components/projectItem";

export default function Home() {
  return (
    <>
      {particlesBackground()}
      {navbar()}
      {projectItem(
        "react.png",
        "Personal Website",
        "The one you're on right now! Hosted on my local server, routed through Cloudflare Zero Trust.\n\nBuilt Using:\n- React\n- CSS\n- TypeScript",
        "https://github.com/coldestEight/personal-website"
      )}
      {projectItem(
        "calendarGPT.png",
        "CalendarGPT",
        "GPT powered virtual assistant with access to calendar events through Google Calendar.\n\nBuilt Using:\n- Python\n- HTML\n- CSS\n- JavaScript\n- Flask, OpenAI API, Google Calendar API",
        "https://github.com/coldestEight/calendarGPT"
      )}
      {projectItem(
        "8ballpool.png",
        "2 Player 8-Ball Pool",
        "Fully functional full-stack 8-Ball Pool game featuring responsive HTML interface\n\nBuilt Using:\n- C\n- Python\n- HTML\n- CSS\n- JavaScript\n- SQLite3, JQuery",
        "https://github.com/coldestEight/8-Ball-Pool"
      )}
      <br></br>
    </>
  );
}
