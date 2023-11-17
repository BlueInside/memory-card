function ScoreBoard({ score, bestScore }) {
  return (
    <div className="score">
      <p>Score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}

export default ScoreBoard;
