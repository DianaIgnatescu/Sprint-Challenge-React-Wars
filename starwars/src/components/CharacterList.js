import React from 'react';
import Character from './Character';

const CharacterList = props => (
  <div>
    {props.starwarsChars.map(character => (
      <Character name={character.name} />
    ))}
  </div>
);

export default CharacterList;
