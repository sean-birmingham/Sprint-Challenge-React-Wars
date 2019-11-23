import React from "react";

const CharacterCard = props => {
    return (
        <div>
            <h2>{props.character.name}</h2>
            <p>Birth year: {props.character.birth_year}</p>
            <p>Gender: {props.character.gender}</p>
            <p>Hair color: {props.character.hair_color}</p>
        </div>
    );
};

export default CharacterCard;