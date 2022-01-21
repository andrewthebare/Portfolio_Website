import React from 'react';
import {makeStyles} from "@material-ui/core";

import arrowBG from './images/ArrowBG.png'
import mountainBGSquare from './images/mountainBGSquare.jpeg'
import thumbsUp from './images/thumbsUp.jpg'
import TopBar from "./TopBar";
import SquareDisplay from "./Components/SquareDIsplay";
import {projectData} from "./projectData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer, {SocialIconCustom} from "./Components/Footer";
import SkillSquare from "./Components/SkillSquare";


export default function Home(props) {
  
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 800? 2:1,
    slidesToScroll: 1,
    // vertical: window.innerWidth <= 600,
    focusOnSelect:true,
    autoPlay: true,
    autoplaySpeed:2000,
    // cssEase:
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
            {/*<a className={cn.contactBTN}>Get in Touch</a>*/}
          </div>
  
          <img className={`${cn.heroContentItem} ${cn.imgFit}`} src={mountainBGSquare}/>
        </div>
      </div>
      <br/>
      <div className={cn.section}>
        <h2>What I do</h2>
        <div className={cn.skillsHolder}>
          <SkillSquare skillName={'Web Development'} icon={'web'} description={'Fullstack and fully custom website development'} fontSize={50}/>
          <SkillSquare skillName={'Mobile Development'} icon={'phone'} description={'Cross platform mobile app design and development specializing in React Native'} fontSize={50}/>
          <SkillSquare skillName={'Shopify'} icon={'cart'} description={'New store creation, custom component development, and expert consulting'} fontSize={50}/>
          {/*<SkillSquare skillName={'Full Stack Consulting'} icon={'assess'} description={''}/>*/}
          <SkillSquare skillName={'Unity Development'} icon={'vg'} description={'Unity Component scripting'} fontSize={50}/>
        </div>
      {/*  TODO SHill bar NPM*/}
      {/*  <SkillSquare bgColor={'#777'}/>*/}
      </div>
      <div className={`${cn.blueBG} ${cn.section}`}>
        <h3>Here are some things I've made</h3>
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
      <div className={cn.section}>


        <h3>My Credentials</h3>
        <div className={cn.credentialsHolder}>
          <div className={cn.credentialsSquare}>
            <div>
              <h4>Education</h4>
              <h5>Clemson University</h5>
              <p>BS Computer Science 2021</p>
            </div>
          </div>
          <div className={cn.credentialsSquare}>
            <div>
              <h4>Current Job</h4>
              <a style={{textDecoration:'none', color:'black'}} href='https://cognitoforms.com'><h5>Software Engineer @ Cognito Forms</h5></a>
              <SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://linkedin.com/in/andrewbareclemson'}/>
            </div>
          </div>

          {/*<TimeLineElement title={'Clemson University'} subtitle={'BS Computer Science 2021'}/>*/}
          {/*<TimeLineElement title={'Software Engineer'} subtitle={'Capgemini inc'}/>*/}
          {/*/!*<TimeLineElement title={'Freelance Software Developer'} subtitle={'Shopify and Web Development'}/>*!/*/}
        </div>
        <a className={cn.orangeButton} href={'https://drive.google.com/file/d/1on_sqXqAPLNGkb_14wIRpnLH47KzdKfW/view?usp=sharing'} target={'_blank'}>
          <h6>Here's my Resume</h6>
        </a>
      </div>
      <br/>
      <div className={cn.section}>
        <h2>Who am I?</h2>
        <div className={cn.aboutMeHolder}>
          <div className={cn.aboutMeImageHolder}>
            <img className={`${cn.aboutMeImage}`} src={thumbsUp}/>
          </div>
          <div className={cn.aboutMeContent}>
            <h5 className={cn.text}>Powered by Sweet Tea, I'm a true son of the south!</h5>
            <h6 className={cn.text}>I'm also a...</h6>
            <div>
              <h6>Clemson University Grad</h6>
              <h6>Soccer Fanatic</h6>
              <h6>and World Traveler</h6>
            </div>
            <h6>Catch a glimpse of my life here:<SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://www.instagram.com/andrewthebare'}/></h6>
            {/*<div className={cn.orangeButton}><h6>More About Me</h6></div>*/}
          </div>

        </div>

      </div>

      <Footer/>
    </div>
  )
}

export function TimeLineElement(props){

  const cn = useStyles();
  return(
    <div className={cn.timelineBase}>
      <div className={cn.timeLineCircle}>C</div>
      <h5>{props.title}</h5>
      <h6>{props.subtitle}</h6>
      <p>{props.description}</p>
    </div>
  )
}

const useStyles=makeStyles({
  homepage:{
    display: "block",
  },

  skillsHolder:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",


    maxWidth: '1200px',
  },

  section:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: '60%',
    paddingBottom: '30px',
    paddingTop: '20px',
    paddingLeft: '5px',
    paddingRight: '5px',
    // background: 'linear-gradient(90deg, rgba(15,125,218,1) 0%, rgba(187,205,255,1) 50%, rgba(15,125,218,1) 100%)'
  },
  blueBG:{
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
    maxWidth: '100%',
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
    maxWidth: window.innerWidth>800?  '800px' : window.innerWidth-30+'px',
    objectFit: "contain",
  
    margin: '10px',
    
    wordWrap: "normal",
    // fontSize:'35px'
  
  },
  imgFit:{
    border: '1pt solid black',
    borderRadius: '1%'
  },

  credentialsHolder:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",

    maxWidth: '1200px',

  },
  credentialsSquare:{
    width: window.innerWidth>1200? '550px':'350px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    textAlign: "center",

  },

  aboutMeHolder:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    flexWrap: "wrap",
    width: '100%',
    padding: 0,
    // maxHeight: '900px',
  },
  aboutMeImageHolder:{
    flex: 1,
    backgroundColor: 'rgba(15,125,218,1)',
    padding: '1%',
    marginLeft: '-10px',    borderRadius: ' 0% 2% 2% 0%',
    objectFit: "contain",

    minWidth: window.innerWidth >800? '50%':'100%',
    marginRight: window.innerWidth >800? '0%':'15%',

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  aboutMeImage:{
    width: window.innerWidth>800 ?'75%' : '90%',
    objectFit: "contain",
    border: "unset",
    borderRadius: '50px',

  },
  aboutMeContent:{
    flex: 1,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    paddingLeft:window.innerWidth>800? '5%':0,
    paddingRight:window.innerWidth>800? '10%':0,


    textAlign: "center",
    // fontSize: '2em',
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
    // fontFamily: '"Times New Roman", Times, serif'
  },
  text:{
    wordWrap: "break-word",
    margin: '10px',
  },

  timelineBase:{
    position: "relative",
    // width: '100%',
    borderTop: '1pt solid black',
    margin: '0px',
    paddingBottom: '90px',

    width: '400px'
  },

  timeLineCircle:{
    position: "absolute",
    left: '40%',
    top: -25,

    width: '50px',
    height: '50px',

    border: '1pt solid black',
    borderRadius:'100%',

    zIndex:1,
    backgroundColor: "white",
  },

  orangeButton:{
    textDecoration: "none",
    color: '#232323',
    backgroundColor: 'rgba(252,176,69,1)',
    '&:hover':{
      backgroundColor: 'rgba(242,166,59,.7)',
      // border: '4pt solid black',
      // scale: '175%'
    },
    cursor: "pointer",


    maxHeight: '40px',
    maxWidth: '300px',
    padding: '5px',
    textAlign: "center",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: '15px',

  },


})