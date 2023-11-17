import { useEffect, useState } from 'react';

function CardGame() {
  const [data, setData] = useState('');

  useEffect(() => {
    let ignore = false;
    fetch(
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12',
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
  return (
    <div>
      {data ? (
        <div>
          {data.map((character) => (
            <div key={character.id}>
              {character.name}, {}
            </div>
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
