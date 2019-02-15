import React from 'react';
import Character from './Character';

const CharacterList = props => (
  <div>
    {props.starwarsChars.map(character => (
      <Character
        key={`characterCard-${character.created}`}
        name={character.name}
        birth_year={character.birth_year}
        gender={character.gender}
        height={character.height}
        eye_color={character.eyecolor}
        hair_color={character.hair_color}
      />
    ))}
  </div>
);

export default CharacterList;
