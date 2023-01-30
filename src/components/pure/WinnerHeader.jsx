import React from 'react'
import Square from './square.jsx'

const ResultHeader = ({ winPlayer }) => {
  return (
    <header className='win'>
      {winPlayer && <Square>{winPlayer}</Square>}
    </header>
  )
}

export default ResultHeader