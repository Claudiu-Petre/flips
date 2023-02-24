import React, { useState, useEffect, useRef } from 'react'

const Card = ({ cards }) => {
  const [rotate, setRotate] = useState(false)
  const [height, setHeight] = useState('initial')

  const frontEl = useRef()
  const backEl = useRef()

  function setMaxHeight(){
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    setHeight(Math.max(frontHeight,backHeight, 100))
  }

  useEffect(setMaxHeight, [cards.question, cards.answer, cards.options])
  useEffect(() => {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  }, [])

  return (
    <div 
    className={`card ${rotate ? 'rotate' : ''}`}
    style={{ height: height }}
    onClick={() => setRotate(!rotate)}>

      <div className='front' ref={frontEl}>
        {cards.question}
      <div className='cards-options'>
        {cards.options.map(option => {
          return <div className='cards-option' key={option}>{option} </div>
        })}
      </div>
      </div>
<div className='back' ref={backEl}>
  {cards.answer}
</div>
      {/* {rotate ? cards.answer : cards.question} */}

    </div>
  )
}

export default Card
