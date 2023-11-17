import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { shuffleArray } from '../utils/utils';
function CardGame({ handleScoreUpdate, handleScoreReset }) {
  const [data, setData] = useState('');

  // Fetches data with Rick Morty Characters
  useEffect(() => {
    console.log('effect');
    fetch(
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12', // Ids of characters to fetch
      {}
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.log('Error', error));
  }, []);

  function handleCardClick() {
    handleScoreUpdate();
    const shuffledArray = shuffleArray(data);
    setData(shuffledArray);
  }
  return (
    <div>
      {data ? (
        <div>
          {data.map((character) => (
            <CharacterCard
              handleCardClick={handleCardClick}
              handleScoreReset={handleScoreReset}
              key={character.id}
              name={character.name}
              url={character.image}
            />
          ))}
        </div>
      ) : (
        <div>
          <p>loading...</p>
        </div>
      )}
    </div>
  );
}

export default CardGame;
