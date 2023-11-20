import React from 'react'
import './Home.css'
import Footer from './Footer'
import logos from './logos.png'
const Home = () => {
  return (
    <div>
    <div class="lo">
      <img src={logos} alt="logo" style={{ width:"200", height:"200",borderRadius:"30%"}}></img>
           <h1>ATMYTECH SOFTWARE SOLUTION</h1>
           </div>
           
      <Footer/>
    </div>
  )
}

export default Home