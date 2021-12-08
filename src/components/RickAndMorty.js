import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacter } from '../actions';
import Character from './Character';

const RickAndMorty = (props) => {
    const {characters, isFetching, error} = props;

    const character = characters[1]
    console.log(characters);

    useEffect(() => {
        props.getCharacter();
    }, [])

    if (error) {
        return <h2>There is an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching a character for you!</h2>;
    }

    return (
            <div className="character-cont">
                {
                    characters.map(character => {
                        return <Character character={character}/>
                    })
                }
            </div>
    );
};

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getCharacter})(RickAndMorty);