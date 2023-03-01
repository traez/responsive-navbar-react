import React, { useState, useEffect } from 'react';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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
        <>
        <main>

<nav>
    <article>
        <header>React</header>
        <aside></aside>
    </article>
    {(screenWidth > 800) && (
    <menu >
        <li className="menu-li">Home</li>
        <li className="menu-li">Services</li>
        <li className="menu-li">Products</li>
        <li className="menu-li">Contact Us</li>
        <li id="sign-up">Sign up</li>
    </menu>)}

    {(screenWidth < 800) && (
    <details>
        <summary><strong>Menu</strong></summary>
        <ul>
            <li className="ul-li">Home</li>
            <li className="ul-li">Services</li>
            <li className="ul-li">Products</li>
            <li className="ul-li">Contact Us</li>
            <li id="sign-up">Sign up</li>
        </ul>
    </details>)}
</nav>

<section></section>
  
  
  
<footer><a href="https://github.com/traez/responsive-navbar-react" target="_blank">https://github.com/traez</a></footer>
</main>
        </>
    )
}

/*
I did this project 3 ways. With vanilla Javascript in Zuri file. Javascript function controlled vidth view no media query, coupled with css hide and block class. Modern detail tag used so no need for button to control toggle.

QQ style is way seen on Google. Media query used to control view mobile and desktop. Plus old html so button wired with react used to control toggle. react use effect to control width.

in my react way. react used to control display - toggle block and hide, no media query. modern detail tag used so no need for additional toggle function
*/