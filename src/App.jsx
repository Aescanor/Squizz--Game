import { useState } from 'react';
import './App.css';
import FinalPage from './components/FinalPage';
import StartingPage from './components/StartingPage';
import QuestionsPage from './components/QuestionsPage';

import Logo from "./assets/images/logo_squizz_game.png"




function App() {

  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [username, setUsername] = useState("");

  return (

<div>

<a href="./components/StartingPage.jsx">
<img className='logo' src={Logo} alt="logo squizz game" title="retour à l'accueil"/>
</a>
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
        />
      )}
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          setScore={setScore}
          username={username}
          setUsername={setUsername}
        />
      )}

      <footer>
        <p>Simplon Projet React Quizz Solo</p>
        <p>Æscanor - Février 2023</p>
      </footer>
    </div>  
    )

   
}

export default App;