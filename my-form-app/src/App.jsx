import React, { useState } from 'react'
import { Forms } from './components/Forms'
import './App.css';

export default function App() {
  const [cards, setCards] = useState([]);

  function handleAddCards (value) {
    const copyCards = [...cards, value];
    setCards(copyCards)
  }


  return (
    <div className="App">
        <Forms AddCards={handleAddCards}/>
        {cards.length && cards.map(card => 
          <div>
            <p>Name: {card.name}</p>
            <p>Date: {card.date}</p>
            <p>City: {card.city}</p>
            <p>Gifts: {card.gifts}</p>
          </div>)}
    </div>
  );
}
