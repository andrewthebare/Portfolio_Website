import React from 'react';
import {makeStyles} from "@material-ui/core";

import arrowBG from './images/ArrowBG.png'
import profile from './images/TrollyStop.JPG'
import Button from "@material-ui/core/Button";
import TopBar from "./TopBar";
import SquareDisplay from "./Components/SquareDIsplay";
import {projectData} from "./projectData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";


export default function (props) {
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: window.innerWidth <= 600? 1 : window.innerWidth <= 1000? 2: 3,
    slidesToShow: 2,
    slidesToScroll: 1,
    // vertical: window.innerWidth <= 600,
    focusOnSelect:true,
  };
  
  
  const cn = useStyles();
  return(
    <div className={cn.homepage}>
      <TopBar/>
      <div className={cn.heroHolder}>
        <img className={cn.hero} src={arrowBG}/>
        <div className={cn.heroContent}>
          <div className={cn.heroContentItem}>
            <h2 className={cn.text}>Hello, I'm Andrew Bare</h2>
            <a className={cn.contactBTN}>Get in Touch</a>
          </div>
  
          <img className={`${cn.heroContentItem} ${cn.imgFit}`} src={profile}/>
        </div>
      </div>
      <br/>
      <div>
        <h3>I Build Apps and Websites</h3>
      {/*  TODO SHill bar NPM*/}
      </div>
      <div className={cn.section}>
        <h3>I've built some pretty cool things</h3>
        <div className={cn.slider}>
          <Slider {...settings}>
            {projectData.map(block=>{
              return(
                <SquareDisplay {...block}/>
              )
            })}
          </Slider>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

const useStyles=makeStyles({
  homepage:{
    display: "block",
  },
  
  section:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: '60%',
    paddingBottom: '20px',
    
    background: 'linear-gradient(90deg, rgba(15,125,218,1) 0%, rgba(187,205,255,1) 50%, rgba(15,125,218,1) 100%)'
  },
  slider:{
    position:"relative",
    width:'100%',
    maxHeight:'600px',
    maxWidth: '1200px',
    padding: '15px',
  },
  heroHolder:{
    position: "relative",
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '85px',
    
  },
  hero:{
    background: 'linear-gradient(45deg, rgba(187,205,255,1) 0%, rgba(15,125,218,1) 50%, rgba(252,176,69,1) 100%)',
    position:"absolute",
    top: '-10%',
    minWidth: "100%",
    height: '120%',
    zIndex:-1,
  },
  heroContent:{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  heroContentItem:{
    display:"flex",
    justifyContent: "center",
    flexDirection:"column",
    minWidth:'200px',
    maxWidth: window.innerWidth>600?  '600px' : window.innerWidth-30+'px',
    objectFit: "contain",
  
    margin: '10px',
    
    wordWrap: "normal",
    fontSize:'35px'
  
  },
  imgFit:{
    border: '1pt solid black',
    borderRadius: '1%'
  },
  
  contactBTN:{
    width:'220px',
    height: '40px',
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    verticalAlign: "middle",
    
    cursor: "pointer",
    backgroundColor: 'rgba(252,176,69,1)',
    outline: '1pt solid rgba(202,126,49,1)',
    fontFamily: '"Times New Roman", Times, serif'
  },
  text:{
    wordWrap: "break-word",
  }
  
})