import React from "react"
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
   
  }));


export default function Appbar(){
  const classes = useStyles();

  return (
            <AppBar position="static" className="appbar">
                <Toolbar>                    
                    <img src="dwplogo.png" width="60" height="60" style={{paddingLeft: "5px"}}/><span className="dwp">design for a better world</span>
                    <div  style={{padding:"10px",marginLeft : "29%",marginRight : "20%",fontFamily: "Arial",fontWeight:"400",fontSize:"20px"}}>
                        Project Checklist - Architecture
                    </div>
                  
                </Toolbar>
            </AppBar>

        )
}