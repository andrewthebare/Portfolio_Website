import React from 'react';
import {makeStyles} from "@material-ui/core";

export default function AnimateText (params) {
  
  
  const chooseText= () =>{
    switch (params.type){
      case 3:
        return <h3>{params.text}</h3>
    }
  }
  const classes = useStyles();
  return(
    <div className={classes.holder}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,160L720,288L1440,64L1440,320L720,320L0,320Z" fill="#fc0"/></svg>
      {chooseText()}
      <div className={classes.underline}>a</div>
    </div>
  )
}

const useStyles= makeStyles({
  holder:{
    display: "block",
  },
  
  underline:{
    backgroundColor:'#eaa',
    
    position: "absolute",
    left:0,
    bottom: 0,
    width:'50%',
    
    '&:hover':{backgroundColor: '#7c7'},
    
  }
})