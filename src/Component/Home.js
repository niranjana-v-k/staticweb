import React from 'react'
import './Home.css'
import Footer from './Footer'
import logos from './logos.png'
const Home = () => {
  return (
    <div>
    <div class="lo">
      <img src={logos} alt="logo" style={{ width:"50", height:"50",borderRadius:"1000%",margintop:"13%",paddingtop:"3%",float:"left"}}></img>
           <h1 class="text" style={{color:"white"}}>ATMYTECH SOFTWARE SOLUTION </h1>
           </div>
           
      <Footer/>
    </div>
  )
}

export default Home