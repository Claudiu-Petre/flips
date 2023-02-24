import React from 'react'
import Card from './Card'

const CardList = ({ cards }) => {
  return (
    <div className='card-grid'>
      {cards.map(cards => {
        return <Card cards={ cards } key={cards.id} />
      })}
    </div>
  )
}

export default CardList
