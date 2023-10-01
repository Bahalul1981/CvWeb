import React from "react";
import { Header } from "../index";
import "./education.css";

export const Education = () => {
  return (
    <>
      <Header />
      <div className="education-container">
        <h1 style={{ color: "#142f43" }}>Utbildningar</h1>
        <div className="education-item">
          <div className="education-txt">
            <h3>.NET Utvecklare</h3>
            <h4>KYH Yrkeshögskola (430 yh poäng/2 år)</h4>
            <h5>Augusti 2023 - Juni 2025</h5>
            <p>Årstaängsvägen 33, 117 43 Stockholm</p>

            <a
              className="web-link"
              href="https://kyh.se/utbildningar/net-developer/"
              target="_blank"
              rel="noreferrer"
            >
              Skolan webbplats
            </a>
            <p className="courses">Kurser</p>
            <ul className="course-list">
              <li>Jämlikhet i yrkeslivet</li>
              <li>Objektorienterad programmering C#</li>
              <li>Projekt 1: Kassasystemet</li>
              <li>HTML5, CSS3 och Javascript</li>
              <li>Webbutveckling .NET</li>
              <li>Projekt 2: Webutveckling med .NET</li>
              <li>Testning</li>
              <li>JSystemutveckling i .NET</li>
              <li>LIA 1: 09 dec.2024 - 14 feb. 2025</li>
              <li>LIA 1: 17 feb.2025 - 14 apr. 2025</li>
              <li>Examensarbete: 28 apr. 6 jan.</li>
            </ul>
          </div>
          <div className="education-img"></div>
        </div>
        <div className="education-item">
          <div className="education-txt">
            <h3>Frontend Utvecklare</h3>
            <h4>Nackademin AB (400 yh poäng/2 år)</h4>
            <h5>Augusti 2021 - Juni 2023</h5>
            <p>Tomtebodavägen 3A, 171 65 Solna</p>

            <a
              className="web-link"
              href="https://nackademin.se/utbildningar/frontend-utvecklare/"
              target="_blank"
              rel="noreferrer"
            >
              Skolan webbplats
            </a>
            <p className="courses">Kurser</p>
            <ul className="course-list">
              <li>Affärsmannaskap</li>
              <li>Frontend‐utveckling</li>
              <li>Introduktion och projektmetodik</li>
              <li>JavaScript 1, HTML och CSS</li>
              <li>Grafikverktyg (Figma, XD)</li>
              <li>Projekt: Skapa responsiv modern hemsida</li>
              <li>JavaScript 2</li>
              <li>Interaktion med CMS</li>
              <li>Node.js som backend‐språk</li>
              <li>JavaScript 3 (React)</li>
              <li>LIA-1 och 2</li>
              <li>JavaScript 4(React, test.js)</li>
            </ul>
          </div>
          <div className="education-img"></div>
        </div>
        <div className="education-item">
          <div className="education-txt">
            <h3>FOOD AND BEVERAGE MANAGER (YRKESHÖGSKOLEEXAMEN 300 POÄNG)</h3>
            <h4>Företagsekonomiska institutet AB (400 yh poäng/2 år)</h4>
            <h5>Augusti 2017 - Juni 2019</h5>
            <p>Tomtebodavägen 3A, 171 65 Solna</p>

            <a
              className="web-link"
              href="https://www.fei.se"
              target="_blank"
              rel="noreferrer"
            >
              Skolan webbplats
            </a>
          </div>
          <div className="education-img"></div>
        </div>
        <div className="education-item">
          <div className="education-txt">
            <h3>MAGISTEREXAMEN I SAMHÄLLSVETENSKAP</h3>
            <h4>Dhaka College</h4>
            <h5>Augusti 2008 - Juni 2010</h5>

            <a
              className="web-link"
              href="https://dhakacollege.edu.bd"
              target="_blank"
              rel="noreferrer"
            >
              Webbplats
            </a>
          </div>
          <div className="education-img"></div>
        </div>
      </div>
    </>
  );
};
