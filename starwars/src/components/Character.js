/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const Character = ({
  name, birth_year, gender, height, eye_color, hair_color, films,
}) => (
  <div className="character-card">

    <div className="character-name">
      <h2>{name}</h2>
    </div>

    <div className="character-info">
      <p><span>Birth Year:</span>{birth_year}</p>
      <p><span>Gender:</span>{gender}</p>
      <p><span>Height:</span>{height} cm</p>
      <p><span>Eye Color:</span>{eye_color}</p>
      <p><span>Hair Color:</span>{hair_color}</p>
      <p><span>Episodes Starred In:</span>{films.length}</p>
    </div>
  </div>
);

export default Character;
