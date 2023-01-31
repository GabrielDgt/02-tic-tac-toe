import React from 'react'
import WinnerHeader from './../pure/WinnerHeader.jsx'
import WinnerFooter from './../pure/WinnerFooter.jsx'

const WinnerModal = ({winPlayer, restartGame}) => {

  if (winPlayer === null) return null

  const winnerText = winPlayer === false ? 'Draw' : 'Winner:'

  return (
    <section className='winner'>
        <div className='text'>
            <h2>{winnerText}</h2>
            <WinnerHeader winPlayer={winPlayer}></WinnerHeader>
            <WinnerFooter restartGame={restartGame}></WinnerFooter>
        </div>
    </section>
  )
}

export default WinnerModal