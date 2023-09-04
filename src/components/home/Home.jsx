import React from "react";
import { Header } from "../header/Header";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-image-and-text">
        <div className="home-content">
          <p className="about-me-text">
            Själv är jag en entusiastisk frontendutvecklare med en kreativ ådra
            för att skapa fängslande användarupplevelser. Jag är kunnig i
            JavaScript, React, Redux och REST API. Innehavare av en 2-årig
            yrkeshögskoleexamen i frontendutveckling från Nackademin AB. Jag är
            ständigt ivrig att lära och lyfta min resa inom IT till nya höjder.
            Jag ser fram emot möjligheten att delta i skapandet av framtidens
            innovationer.
          </p>
        </div>
        <div>
          <img src="./homeImage.jpg" alt="main" className="home-main-image" />
        </div>
      </div>
      <div>
        <h1>Hobbies</h1>
      </div>
    </div>
  );
};
