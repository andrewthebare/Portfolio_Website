import React from 'react';
import {makeStyles} from "@material-ui/core";

import arrowBG from './images/ArrowBG.png'
import profile from './images/TrollyStop.JPG'
import Button from "@material-ui/core/Button";
import TopBar from "./TopBar";

export default function (props) {
  
  
  const cn = useStyles();
  return(
    <div>
      <TopBar/>
      <div className={cn.heroHolder}>
        <img className={cn.hero} src={arrowBG}/>
        <div className={cn.heroContent}>
          <div className={cn.heroContentItem}>
            <h1 className={cn.text}>Hello, I'm Andrew Bare</h1>
            <h5>I am a Computer Science student, software developer, and Shopify Expert!</h5>
            <div className={cn.contactBTN}>Get in Touch</div>
          </div>
          
          <img className={`${cn.heroContentItem} ${cn.imgFit}`} src={profile}/>
        </div>
      </div>
      <br/>
      <h2>I build smart websites</h2>
    </div>
  )
}

const useStyles=makeStyles({
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
    maxWidth:'600px',
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
    
    backgroundColor: 'rgba(252,176,69,1)',
    outline: '1pt solid rgba(202,126,49,1)',
    fontFamily: '"Times New Roman", Times, serif'
  },
  text:{
    wordWrap: "break-word",
  }
  
})