import React from 'react';
import './JokeList.css';

interface Props {
  jokes: string[];
}

const JokeList: React.FC<Props> = ({ jokes }) => {
  return (
    <div className="JokeList">
      {jokes.map((joke, index) => (
        <p key={index}>{joke}</p>
      ))}
    </div>
  );
};

export default JokeList;
