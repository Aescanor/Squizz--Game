import React, { useState } from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {

  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  return (

    <Card>
      <h1 className="header">Bienvenue sur Squizz Game {username}</h1>
      <h3 className="primary_text">Entrez votre nom d'utilisateur.</h3>
      <input
        type="text"
        placeholder="votre nom d'utilisateur"
        className="username_input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="start-btn" onClick={startGame}>
        C'est parti !
      </button>

      <p className="top_score">
        Top score: <span>{topScore}</span>
      </p>
    </Card>
    
  );
};

export default StartingPage;