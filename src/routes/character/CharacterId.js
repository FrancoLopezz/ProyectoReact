import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';


const Linkk  = styled.div`
  border: 6px solid #484848;
  padding: 4px;
`;

const Back = styled.div`
  width: 2.1rem;
  border: 1px solid #484848;
  padding: 4px;
`;

const PeopleId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((res) => res.json())
      .then((characterInfo) => setCharacter(characterInfo));
  }, [id]);

  return (
    <main>
      {Object.keys(character).length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <div>

          <h1> {character.name} </h1>

          <Linkk>

            <p>Name: {character.name}</p>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>

            <Back>
              <Link to={'/characters'}>Back</Link>
            </Back>

          </Linkk>
        </div>
      )}
    </main>
  );
};

export default PeopleId;