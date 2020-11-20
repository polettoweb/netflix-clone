import React, { useState, useEffect } from 'react'

import './nav.css'

function Nav() {
  const [show, setShow] = useState(false)

  useEffect(() => {

    const addBackground = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else setShow(false)
    }

    window.addEventListener("scroll", addBackground )
    return () => {
      window.removeEventListener("scroll", addBackground)
    }
  }, [])

  return (
    <div className={`nav${show ? " nav__black" : ""}`}>
      <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo" />
      <img className="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User avatar" />
    </div>
  )
}

export default Nav
