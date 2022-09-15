import React from "react";
import './home.css'
import Navbar from './Navbar'

function Home(){
  
  return(
    <div>
    <Navbar />
   <div className="padd2"></div>
    <div className="home">
     <p className="head"><b>Learn to code - for free.</b></p>
     <p className="head"><b>Build projects.</b></p>
     <p className="head"><b>Earn certifications.</b></p>
     <p className="line"><b>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</b></p>
     <div className="logo"><b>Apple &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Google &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Microsoft &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Spotify&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; amazon.com</b></div>
     <div className="start"><a href="/Singup" >Get &nbsp; started &nbsp; ( it's &nbsp; free )</a></div>
    </div>
    </div>
  );
}
export default Home;
