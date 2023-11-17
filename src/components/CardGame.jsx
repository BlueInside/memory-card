import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

function CardGame({ handleScoreUpdate }) {
  const [data, setData] = useState('');

  // Fetches data with Rick Morty Characters
  useEffect(() => {
    let ignore = false;
    fetch(
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12', // Ids of characters to fetch
      {}
    )
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          setData(response);
        }
      });
    return () => (ignore = true);
  }, []);

  function handleCardClick() {
    handleScoreUpdate();
  }
  return (
    <div>
      {data ? (
        <div>
          {data.map((character) => (
            // <div key={character.id}>
            //   {character.name}, {}
            // </div>
            <CharacterCard
              handleCardClick={handleCardClick}
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
