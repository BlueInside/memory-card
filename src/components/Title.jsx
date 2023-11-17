/* eslint-disable react/prop-types */
function Title({ children }) {
  return (
    <header>
      <div className="titleAndScore">
        <h1>Rick & Morty Memory Game</h1>
        {children}
      </div>
      <p className="instruction">
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
    </header>
  );
}

export default Title;
