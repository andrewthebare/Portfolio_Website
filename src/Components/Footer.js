import React from 'react';
import {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import { SocialIcon } from 'react-social-icons';

export default function Footer(){

    const [iconColor, setIconColor] = useState('#fcfcfc');

    const styles = useStyles();
    return(
        <div className={styles.base}>
            <div className={styles.contactCard}>
                <h3>Contact Me</h3>
                <h5>email: contact@abare.dev</h5>
            </div>
            <div className={styles.socialsCard}>
                <h4>Reach me on these socials</h4>
                <div className={styles.socialsHolder}>
                    <SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://www.instagram.com/andrewthebare'}/>
                    <SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://github.com/andrewthebare'}/>
                    <SocialIconCustom bgColor={'#ef8d26'} bgBase={'#fcfcfc'} url={'https://linkedin.com/in/andrewbareclemson'}/>
                </div>
                <p><i>coded from scratch with my very own fingers!</i></p>
            </div>
        </div>
    )
}

export function SocialIconCustom(props){
    const [iconColor, setIconColor] = useState('#fcfcfc');

    return(
        <SocialIcon onMouseEnter={()=>setIconColor(props.bgColor)} onMouseLeave={()=> setIconColor(props.bgBase)} bgColor={iconColor} fgColor={'#333'} url={props.url} target={'_blank'}/>
    )
}

const useStyles = makeStyles({
    base:{
        color: "white",

        marginBottom: -30,
        background: '#232323',

        minHeight: '300px',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '15px',
    },

    socialsHolder:{
        display: "flex",
        justifyContent: "space-around",
    },
    contactCard:{
        flex: 2,
    },
    socialsCard:{
        flex: 1,
        textAlign: "center",
    },
})