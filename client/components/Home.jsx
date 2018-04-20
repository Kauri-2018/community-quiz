import React from 'react'

import {Link} from 'react-router-dom'

const Home = (props) => {
  return (
    <div className="home-wrapper">
      <h1>Community Quiz</h1>
      <div className='name-wrapper'>
        Enter your name:
        <input onChange={props.changeName} />
      </div>
      <div className='start-game-button-wrapper'>
        <Link to='/question/play'><div className='start-game-button'>
          Start Game
        </div></Link>
      </div>
    </div>
  )
}

export default Home
