import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';

const Characters = () => {
  const chars = useSelector(state => state.characters);

  console.log(chars);
  const generateCards = () => {
    return chars.map(c => <Card c={c} />);
  };
  return <div className="character-page">{generateCards()}</div>;
};

export default Characters;
