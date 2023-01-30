import React from 'react'
import WinnerHeader from './../pure/WinnerHeader.jsx'
import WinnerFooter from './../pure/WinnerFooter.jsx'

const WinnerModal = ({winPlayer, restartGame}) => {
  return (
    <section className='winner'>
        <div className='text'>
            <h2>
                {
                    winPlayer === false ? 'Draw' : 'Winner:'
                }
            </h2>
            <WinnerHeader winPlayer={winPlayer}></WinnerHeader>
            <WinnerFooter restartGame={restartGame}></WinnerFooter>
        </div>
    </section>
  )
}

export default WinnerModal