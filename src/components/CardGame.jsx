import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { shuffleArray } from '../utils/utils';
function CardGame({ handleScoreUpdate, handleScoreReset, reset, setReset }) {
  const [data, setData] = useState('');

  // Fetches data with Rick Morty Characters
  useEffect(() => {
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

  // Handles user click on the card
  function shuffleCards() {
    // Shuffles cards
    const shuffledArray = shuffleArray(data);

    // Uses shuffled array
    setData(shuffledArray);
  }
  return (
    <div>
      {data ? (
        <div>
          {data.map((character) => (
            <CharacterCard
              shuffleCards={shuffleCards}
              handleScoreReset={handleScoreReset}
              handleScoreUpdate={handleScoreUpdate}
              key={character.id}
              name={character.name}
              url={character.image}
              reset={reset}
              setReset={setReset}
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
