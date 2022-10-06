import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardCharacter = styled.div`
    display: flex;
`;

const Linkk = styled.div`
  width: 4rem;
  border: 6px solid #484848;
  padding: 4px;
  margin: 5px;
`;

const Planets = () => {

    const [planet, setPlanet] = useState({});

    useEffect(() => {
      fetch('https://swapi.dev/api/planets')
        .then((res) => res.json())
        .then((planets) => setPlanet(planets));
    }, []);


  
    return (
      <main>

        <h1> Planets </h1>

        {Object.keys(planet).length === 0 ? (
          <div>Cargando...</div>
        ) : (
          <div>
            {planet.results.map((planets) => {
              const id = planets.url.split('/')[5];
              return (
                <CardCharacter key={id}>
                  <Linkk>
                    <Link to={`/planets/${id}`}>{planets.name}</Link>
                  </Linkk>
                </CardCharacter>
              );
            })}
          </div>
        )}
      </main>
    );
};

export default Planets;