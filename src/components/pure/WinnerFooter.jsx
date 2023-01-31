import React from 'react'

const Footer = ({ restartGame }) => {

    const handleClick = () => {
        restartGame()
    }

  return (
    <footer>
        <button className="winnerBtn" onClick={handleClick}>Start Again</button>
    </footer>
  )
}

export default Footer