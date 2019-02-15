/* eslint-disable react/prop-types */
import React from 'react';

const Character = props => (
  <div className="character-card">

    <div className="character-name">
      <h2>{props.name}</h2>
    </div>

    <div className="character-info">
      <p><span>Birth Year:</span>{props.birth_year}</p>
      <p><span>Gender:</span>{props.gender}</p>
      <p><span>Height:</span>{props.height} cm</p>
      <p><span>Eye Color:</span>{props.eye_color}</p>
      <p><span>Hair Color:</span>{props.hair_color}</p>
      <p><span>Episodes Starred In:</span>{props.films.length}</p>
    </div>
  </div>
);

export default Character;
