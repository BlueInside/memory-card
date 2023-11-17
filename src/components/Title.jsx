function Title({ children }) {
  return (
    <header>
      <h1>Rick & Morty Memory Game</h1>
      {children}
      <p className="instruction">
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
    </header>
  );
}

export default Title;
