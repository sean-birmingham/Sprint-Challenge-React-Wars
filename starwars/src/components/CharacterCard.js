import React from "react";
import styled from "styled-components";

const CharacterCardContainer = styled.div`
    background: black;
    color: #FFE81F;
    width: 40%;
    margin: 2% auto;
    padding: 5px 5px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 #000;
`

const CharacterCard = props => {
    return (
        <CharacterCardContainer>
            <h2>{props.character.name}</h2>
            <p>Birth year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair color: {props.character.hair_color}</p>
        </CharacterCardContainer>
    );
};

export default CharacterCard;