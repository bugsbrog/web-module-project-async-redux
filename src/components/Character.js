import React from "react";

const Character = (props) => {
    const { character } = props
    return (
        <div className="character">
            <div className="img">
                <img src={character.image} alt="image" />
            </div>
            <div className="character-information">
                <h2>{character.name}</h2>
                <h3>{character.species}</h3>
        </div>
        </div>
    )
}

export default Character;