import React from 'react';
import ReactDOM from 'react-dom';

import FoodFinderAppPics from '../images/FoodFinderAppPics.png'

import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
// import ghIcon from "../images/gitHubIcon.png";

//convoluted crap to import all images
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


const SquareDisplay = (props)=>{
  const styles = useStyles({...props});
  console.log('props', props)
  
  const hasPicture = ()=>{
    if (props.imgSrc){
      let src = '';
      switch (props.imgName){
        case "FoodFinder":
          src = FoodFinderAppPics;
          break;
      }
      
      return(
        <div className={styles.imageHolder}>
          <img className={styles.image} src={src}/>
        </div>
      )
    }
  }
  
  const hasRepo = ()=>{
    if (props.ghSource){
      
      return (
        <a className={styles.smallItem}
           href={props.ghSource} target={'_blank'}>
          <Button>
            Hi{/*<img className={styles.Icon} src={ghIcon}/>*/}
          </Button>
        </a>

      )
    }
  }
  
  return(
    <div className={styles.base}>
      {hasPicture()}
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {hasRepo()}
    </div>
  )
}

const useStyles = makeStyles({
  base:{
    width:'90%',
    height:'100%',
    // margin: '10px',
    // maxHeight:'400px',
    
    border:"solid",
  
    display:"block",
    flexDirection:"column",
    backgroundColor: props => props.bgColor || 'rgba(15,125,218,1)'
  },
  imageHolder:{
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