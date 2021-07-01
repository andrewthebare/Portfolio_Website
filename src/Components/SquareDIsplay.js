import React from 'react';
import ReactDOM from 'react-dom';

import FoodFinderAppPics from '../images/FoodFinderAppPics.png'
import ttt from '../images/TicTacToe.PNG'
import guat from '../images/GuatPic.PNG'

import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {SocialIconCustom} from "./Footer";

//convoluted crap to import all images
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


const SquareDisplay = (props)=>{
  const styles = useStyles({...props});
  console.log('props', props)
  
  const hasPicture = ()=>{
    let src = guat; //TODO replace base image
    if (props.imgSrc){
      switch (props.imgName){
        case "FoodFinder":
          src = FoodFinderAppPics;
          break;
        case "ttt":
          src = ttt;
          break;
      }
      console.log('src', src)

    }
    return(
      <div className={styles.imageHolder}>
        <img className={styles.image} src={src}/>
      </div>
    )
  }

  const hasRepo = ()=>{
    if (props.ghSource){
      
      return (
          <SocialIconCustom bgColor={'#fcfcfc'} bgBase={'#fcfcfc00'} url={props.ghSource}/>
      )
    }
  }
  
  return(
      <a className={styles.linkStyle} href={props.link || 'none'} target={'_blank'}>
        <div className={styles.base}>
          {hasPicture()}
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          {hasRepo()}
        </div>
      </a>
  )
}

const useStyles = makeStyles({
  linkStyle:{
    textDecoration: "none",
    color: "inherit",
    cursor: "unset"
  },

  base:{
    width:'90%',
    height:'600px',
    // margin: '10px',
    // maxHeight:'400px',
    
    border:"solid",
    padding: '1%',
  
    display:"flex",
    flexDirection:"column",
    backgroundColor: props => props.bgColor || 'rgb(255,180,25)'
  },
  imageHolder:{
    flex: 3,

    display: "flex",
    width: '100%',
    height:'50%',
    alignSelf: "center",
    objectFit: "contain",
    
    borderBottom: '3pt solid black'
    
  },
  image:{
    // position: "absolute",
    width: '100%',
    height:'100%',
  },
  
  smallItem:{
    display:"flex",
    alignSelf: "center",
  },
  iconBG:{
  backgroundColor:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  Icon:{
    height:'25px',
    width:"auto",
  },
  
});


export default SquareDisplay;