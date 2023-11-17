import Title from './components/Title';
import ScoreBoard from './components/ScoreBoard';
import CardGame from './components/CardGame';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  function handleScoreUpdate() {
    setScore((prevScore) => prevScore + 1);

    if (score + 1 > bestScore) {
      setBestScore((prevBestScore) => prevBestScore + 1);
    }
  }

  function handleScoreReset() {
    setScore(0);
  }

  return (
    <>
      <Title>
        <ScoreBoard score={score} bestScore={bestScore} />
      </Title>
      <CardGame
        handleScoreUpdate={handleScoreUpdate}
        handleScoreReset={handleScoreReset}
      />
    </>
  );
}

export default App;
