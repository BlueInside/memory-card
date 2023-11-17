import { useState } from 'react';

function CharacterCard({ name, url, handleCardClick, handleScoreReset }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="card"
      onClick={() => {
        if (!clicked) {
          handleCardClick();
          setClicked(true);
        } else {
          handleScoreReset();
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
