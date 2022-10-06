import React from 'react'; 
import styled from 'styled-components';

const H1saludo = styled.h1`
    padding-top: 10px;
    text-align: center;
    font-family: Arial;
    font-size: 25px;
    font-weight: bolder;
    color: whitesmoke;  
    text-transform: uppercase;
    text-shadow: 1px 0 red, 2px 0 blue; 
`;

const ItemListContainer = (greeting) => {
    return(
        
        <H1saludo>Hello <span>{greeting.nombre}</span>!😁 And Welcome To E-COMMERCE of StarWars!</H1saludo> 

    )
}

export default ItemListContainer;