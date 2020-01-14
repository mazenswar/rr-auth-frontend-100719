import React from 'react';

const Card = ({ c }) => {
  return (
    <div className="card">
      <img src={c.image} alt={'character name'} />
      <h3>{c.name}</h3>
      <h4>{c.species}</h4>
      <h4>{c.status}</h4>
      <h4>{c.origin.name}</h4>
    </div>
  );
};

export default Card;

const rick = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1'
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2'
    // ...
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z'
};
