import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TitleCards from '../../components/TitleCards/TitleCards'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner__img' />
       <div className="hero__caption">
        <img src={hero_title} alt="" className='caption__img'/>
        <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
        <div className="hero__btns">
          <button className="btn"><img src={play_icon} alt="" />Play</button>
          <button className='btn dark__btn'><img src={info_icon} alt="" />More Info</button>
        </div>
      <TitleCards/>
      </div> 
      </div>
      <div className="more__cards">
        <TitleCards title={"Blockbuster Movies"}/>
        <TitleCards title={"Only on Netflix"}/>
        <TitleCards title={"Upcoming"}/>
        <TitleCards title={"Top Picks for You"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
