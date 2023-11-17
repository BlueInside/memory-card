import ScoreBoard from './ScoreBoard';

function Title() {
  return (
    <header>
      <h1>Rick & Morty Memory Game</h1>
      <ScoreBoard />
      <p className="instruction">
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
    </header>
  );
}

export default Title;
