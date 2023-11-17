import Title from './components/Title';
import ScoreBoard from './components/ScoreBoard';
import CardGame from './components/CardGame';
import { useState } from 'react';
import './styles/reset.css';
import './styles/styles.css';
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reset, setReset] = useState(false);

  function handleScoreUpdate() {
    setScore((prevScore) => prevScore + 1);

    if (score + 1 > bestScore) {
      setBestScore((prevBestScore) => prevBestScore + 1);
    }
  }

  function handleScoreReset() {
    setScore(0);
    setReset(true);
  }

  return (
    <>
      <Title>
        <ScoreBoard score={score} bestScore={bestScore} />
      </Title>
      <CardGame
        handleScoreUpdate={handleScoreUpdate}
        handleScoreReset={handleScoreReset}
        reset={reset}
        setReset={setReset}
      />
    </>
  );
}

export default App;
