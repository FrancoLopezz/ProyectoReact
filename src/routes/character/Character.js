import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardCharacter = styled.div`
    display: flex;
`;

const Linkk = styled.div`
  border: 6px solid #484848;
  padding: 4px;
  margin: 5px;
`;


const Character = () => {

    const [people, setPeople] = useState({});

    useEffect(() => {
      fetch('https://swapi.dev/api/people')
        .then((res) => res.json())
        .then((peopleres) => setPeople(peopleres));
    }, []);
  
    return (
      <main>

        <h1> Characters </h1>

        {Object.keys(people).length === 0 ? (
          <div>Cargando...</div>
        ) : (
          <div>
            {people.results.map((character) => {
              const id = character.url.split('/')[5];
              return (
                <CardCharacter key={id}>
                  <Linkk>
                    <Link to={`/characters/${id}`}>{character.name}</Link>
                  </Linkk>
                </CardCharacter>
              );
            })}
          </div>
        )}
      </main>
    );
};

export default Character;