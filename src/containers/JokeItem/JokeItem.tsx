import React, { useEffect, useState } from 'react';
import JokeList from '../../components /JokeList/JokeList';
import Button from '../../components /Button/Button';
import '../../App.css';


const JokeItem: React.FC = () => {
  const [jokes, setJokes] = useState<string[]>([]);
  const numJokes = 5;

  const fetchJokes = async () => {
    try {
      const jokePromises = Array.from({ length: numJokes }, () =>
        fetch('https://v2.jokeapi.dev/joke/Programming').then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch joke');
          }
          return response.json();
        })
      );

      const jokeResults = await Promise.all(jokePromises);
      const newJokes = jokeResults.map(result => {
        if (result.type === 'single') {
          return result.joke;
        } else {
          return `${result.setup} ... ${result.delivery}`;
        }
      });
      setJokes(newJokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className='joke-item'>
      <h1>Programming Jokes</h1>
      <JokeList jokes={jokes} />
      <Button onClick={fetchJokes} />
    </div>
  );
};

export default JokeItem;
