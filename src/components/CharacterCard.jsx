/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';

function CharacterCard({
  name,
  url,
  reset,
  setReset,
  shuffleCards,
  handleScoreReset,
  handleScoreUpdate,
}) {
  // Checks if card was clicked before
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (reset) {
      setClicked(false);
      setReset(false);
    }
  }, [reset, setReset]);
  return (
    <div
      className="card"
      onClick={() => {
        if (!clicked) {
          shuffleCards();
          handleScoreUpdate();
          setClicked(true);
        } else {
          handleScoreReset();
          shuffleCards();
        }
      }}
    >
      <img className="cardImage" src={url} alt={name} />
      <p className="cardName">{name}</p>
    </div>
  );
}

CharacterCard.defaultProps = {
  handleCardClick: () => {
    console.warn('handleClick not provided');
  },
};

export default CharacterCard;
