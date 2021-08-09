import React from 'react';
import ReactDOM from 'react-dom';

import FoodFinderAppPics from '../images/FoodFinderAppPics.png'
import ttt from '../images/TicTacToe.PNG'
import catan from'../images/catan.PNG'

import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {SocialIconCustom} from "./Footer";

import ComputerIcon from '@material-ui/icons/Computer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ExploreIcon from '@material-ui/icons/Explore';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';


//convoluted crap to import all images
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


const SquareDisplay = (props)=>{
  const fontSize=30;
  const styles = useStyles({...props});
  console.log('props', props)
  
  const hasPicture = ()=>{
    let src = 'data:image/jpeg;base64,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'; //TODO replace base image
    if (props.imgSrc){
      switch (props.imgName){
        case "FoodFinder":
          src = FoodFinderAppPics;
          break;
        case "ttt":
          src = ttt;
          break;
        case 'vball':
          src= props.imgSrc;
          break;
        case 'catan':
          src= catan;
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

  const makeIcon = ()=>{
    switch (props.icon) {
      case 'web': return(<ComputerIcon style={{ fontSize: fontSize }}/>);
      case 'cart': return(<ShoppingCartIcon style={{ flex:1, fontSize: fontSize }}/>);
      case 'phone': return(<PhoneAndroidIcon style={{ fontSize: fontSize }}/>);
      case 'assess': return(<ExploreIcon style={{ fontSize: fontSize }}/>);
      case 'vg': return(<VideogameAssetIcon style={{ fontSize: fontSize }}/>);
    }
  }


  return(
      <a className={styles.linkStyle} href={props.link || ''} target={'_blank'}>
        <div className={styles.base}>
          {hasPicture()}
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className={styles.iconHolder}>
            {makeIcon()}
            {hasRepo()}
          </div>
        </div>
      </a>
  )
}

const useStyles = makeStyles({
  iconHolder:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  linkStyle:{
    textDecoration: "none",
    color: "inherit",
    cursor: "unset",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  base:{
    width:'90%',
    height:'600px',
    // margin: '10px',
    // maxHeight:'400px',
    
    border:"solid",
    borderRadius: '2%',
    padding: '1%',
    alignSelf: "center",
  
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
    
    borderBottom: '3pt solid black',
    borderRadius: '2%'
    
  },
  image:{
    // position: "absolute",
    maxWidth: '100%',
    // height:'100%',
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: '2%'
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