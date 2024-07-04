import React from 'react';

export default function MyPage() {//Every component in the page
    return (
      <div>
        <MyHeader />
        <Tittle/>
        <MyList />
        <Footer />
      </div>
    )
}
  
function MyList(){
    return (
      <ol>
        <li>It's cool</li>
        <li>To land a job</li>
      </ol>
    )
}
  
function MyHeader(){
    return(
      <header>
        <nav>
          <img className='logo' src={process.env.PUBLIC_URL+"/normalPage-assets/logo192.png"} />
          <ul className='navItems'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
}
  
function Tittle(){
    return <h1>Reasons I'm excited to learn React</h1>
}
  
function Footer(){
    return <footer>© 2024 Alloco development. All rights reserved.</footer>
}