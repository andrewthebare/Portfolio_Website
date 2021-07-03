import React from 'react';
import {useState} from 'react';
import {makeStyles} from "@material-ui/core";

import ComputerIcon from '@material-ui/icons/Computer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ExploreIcon from '@material-ui/icons/Explore';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';


export default function SkillSquare(props){
    const fontSize = props.fontSize;

    const makeIcon = ()=>{
        switch (props.icon) {
            case 'web': return(<ComputerIcon style={{ fontSize: fontSize }}/>);
            case 'cart': return(<ShoppingCartIcon style={{ flex:1, fontSize: fontSize }}/>);
            case 'phone': return(<PhoneAndroidIcon style={{ fontSize: fontSize }}/>);
            case 'assess': return(<ExploreIcon style={{ fontSize: fontSize }}/>);
            case 'vg': return(<VideogameAssetIcon style={{ fontSize: fontSize }}/>);
        }
    }

    const styles=useStyle({...props})
    return(
        <div className={styles.base}>
            {makeIcon()}
            <h4 style={{'flex': '2'}}>{props.skillName}</h4>
            <p style={{'flex': '1'}}>{props.description}</p>
        </div>
    )
}

const useStyle=makeStyles({
    base:{
        backgroundColor: props => props.bgColor,

        flex:1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        // maxHeight: '200px',
        // maxWidth: '200px',

        padding: '50px',
    }
})