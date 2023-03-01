import React, {useState, useEffect} from 'react'

export default function QQNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">Home</li>
      <li className="items">Services</li>
      <li className="items">Contact</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}

/*
article https://dev.to/ziratsu/code-a-responsive-navbar-with-react-45le
Github https://github.com/Ziratsu/Responsive-React-Navbar
Youtube https://www.youtube.com/watch?v=8kPk7CTOQh4
*/