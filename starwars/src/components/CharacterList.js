/* eslint-disable react/prop-types */
import React from 'react';
import Character from './Character';

const CharacterList = ({ starwarsChars }) => (
  <div className="character-list">
    {starwarsChars.map(character => (
      <Character
        key={`characterCard-${character.created}`}
        name={character.name}
        birth_year={character.birth_year}
        gender={character.gender}
        height={character.height}
        eye_color={character.eye_color}
        hair_color={character.hair_color}
        films={character.films}
      />
    ))}
  </div>
);

export default CharacterList;
