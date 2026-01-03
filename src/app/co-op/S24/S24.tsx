"use client";
import React from "react";
import navbar from "../../components/navbar";
import particlesBackground from "../../components/particleBackground";
import miniNavbar from "../../components/mininavbar";
import bodyText from "../../components/bodyText";
import imgCaption from "../../components/imgCaption";
import miniTitle from "../../components/miniTitle";

export default function S24() {
  return (
    <>
      {miniTitle("S24 Co-op Work Term")}

      {bodyText(
        "For my S24 co-op I worked as a Research/Data Analyst at the University of Guelph, developing web-scraping tools to collect data for research purposes."
      )}
      {imgCaption(
        "../s24img1.png",
        "An example of a graph from the older project, comparing the difference in price between different level retailers"
      )}
      {bodyText(
        "My employer is Dr. Michael von Massow, a professor at the University of Guelph who specializes in research regarding food and animal welfare. My job was to create a web-scraping tool to collect data on the prices of grocery items in both the US and Canada. This was an extension of an older research project where the prices of 29 different products from 16 stores across various locations in the US and Canada over the course of a year (2022 - 2023). This was time consuming and required several people to manually note down prices every week and weekly maintenance of the research spreadsheet. The goal of developing the web-scraping tool was to simplify and speed up data collection as well as automatically maintaining/updating the spreadsheet. The areas of computer science my role related to was data collection and analysis."
      )}
      {imgCaption(
        "../s24img2.png",
        "An example of a graph from my project, comparing the price of milk in $CAD"
      )}
      {bodyText(
        "My project was creating a web-scraping tool to collect data of the prices of around 30 different products in various areas and stores across Canada and the US. The bulk of my work was in web-scraping, which I hadn’t done before through coursework or on my own, so I had to learn while on the job. As such, I often had to do extensive research on new tools and libraries and determine which ones suited my needs the most. I also had to budget my time correctly to ensure that I was on-track to complete the project by the end of my 12-week term, as I was a one-man team. Overall the end-product is able to crawl through around 300 pages at 10 different store locations, in both the US and Canada, within minutes. Then that data can almost instantly be added to the existing data to create graphs, revealing trends and simplifying comparison. This takes a task that used to require several people in different locations to perform manually over the course of a week, to now being as simple as running a script on a single computer."
      )}
      {imgCaption(
        "../s24img3.png",
        "A picture of my task board, as of the last day of my term"
      )}

      {bodyText(
        "My goals for this work term was to learn web-scraping methods and tools, develop data processing skills, improve my excel skills, and build upon my project management skills. I was able to create the web-scraping tool I set out to make, learning various practices and methods of scraping data from websites. I learned more about how excel can be used to manage and organize data. Throughout the project I was able to create a task board which I updated daily as I progressed through the project and a log where I noted any issues I encountered."
      )}
      {bodyText(
        "In conclusion, my position as a Research/Data Analyst at the University of Guelph under Dr. Michael von Massow was a valuable experience that helped me grow my skills as a developer."
      )}
    </>
  );
}
