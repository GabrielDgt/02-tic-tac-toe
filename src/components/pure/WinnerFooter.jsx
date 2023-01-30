import React from 'react'

const Footer = ({ restartGame }) => {

    const handleClick = () => {
        restartGame()
    }

  return (
    <footer>
        <button onClick={handleClick}>Start Again</button>
    </footer>
  )
}

export default Footer