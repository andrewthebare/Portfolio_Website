import React from 'react';
import {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {SocialIconCustom} from "./Components/Footer";

export default function TopBar(){
  
  const [topBarDisplay, setDropdown] = useState('unset');
  
  const triggerDropdown=()=>{
    if (topBarDisplay==='absolute'){
      setDropdown('unset')
    }
    else if (topBarDisplay==='unset'){
      setDropdown('absolute')
    }
  }
  
  const drawIcon =()=>{
    if (topBarDisplay==='absolute'){
      return(
        <MenuOpenIcon className={cn.icon}/>
      )
    }
    else if (topBarDisplay==='unset'){
      return(
        <MenuIcon className={cn.icon}/>
      )
    }
  }

  const drawSocials = () =>{
    if (window.innerWidth > 500){
      return(
          <div>
            <SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://www.instagram.com/andrewthebare'}/>
            <SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://github.com/andrewthebare'}/>
            <SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://linkedin.com/in/andrewbareclemson'}/>
          </div>
      )
    }else{
      return (<div>a</div>);
    }
  }
  
  const cn = useStyles({topBarDisplay});
  return(
    <div>
      <div className={cn.topMenu}>
        <h3>A</h3>
      </div>
  
      <div className={cn.holder}>
        <h1 className={cn.title}>Andrew Bare</h1>
        {drawSocials()}
        {/*<a onClick={()=> triggerDropdown()}>{drawIcon()}</a>*/}
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  title:{
    // flex: 2,

  },

  icon: {
    cursor: "pointer",
  
  },
  holder:{
    // paddingLeft: '20%',
    // paddingRight: '20%',
    position: "fixed",
    left:0,
    right: 0,
    top:0,
    zIndex: 2,
    
    backgroundColor: '#fcfcfcfc',
    height: '80px',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  
  topMenu:{
    position: props => props.topBarDisplay,
    display: 'box',
    left:0 ,
    right: 0,
    top: 0,
    // height: window.innerHeight,
    bottom: 0,
    zIndex: 2,
  
    backgroundColor: '#eaeaea',
    
  }
})