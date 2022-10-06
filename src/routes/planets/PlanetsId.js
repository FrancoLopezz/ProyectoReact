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


const PlanetsId = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then((res) => res.json())
      .then((characterInfo) => setPlanet(characterInfo));
  }, [id]);

  return (
    <main>
      {Object.keys(planet).length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <Linkk>
          <p>Name: {planet.name}</p>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
          <Back>
            <Link to={'/planets'}>Back</Link>
          </Back>
        </Linkk>
      )}
    </main>
  );
};

export default PlanetsId;