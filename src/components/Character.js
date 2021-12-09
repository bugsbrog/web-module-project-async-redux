import React from "react";
import './../Character.css'

const Character = (props) => {
    const { character } = props
    return (
        <div className="character">
            <div className="img">
                <img src={character.image} alt="image" />
            </div>
            <div className="character-information">
                <h2>{character.name}</h2>
                <h3>{character.status}</h3>
                <h4>{character.species}</h4>
        </div>
        </div>
    )
}

export default Character;