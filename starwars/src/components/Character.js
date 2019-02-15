/* eslint-disable react/prop-types */
import React from 'react';

const Character = props => (
  <div>
    <h2> Name: {props.name}</h2>
    <p>Birth Year:{props.birth_year}</p>
    <p>Gender:{props.gender}</p>
    <p>Height:{props.height}cm</p>
    <p>Eye Color:{props.eye_color}</p>
    <p>Hair Color:{props.hair_color}</p>
  </div>
);

export default Character;
