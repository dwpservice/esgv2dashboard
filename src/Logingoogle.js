import React from 'react';
import GoogleLogin from 'react-google-login';
import {Avatar, Grid,Paper} from '@material-ui/core';
import LockIcon from '@mui/icons-material/Lock';
import App from './App';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';
import dotenv from 'dotenv';
import Erro from './Erro'
import { CastConnected } from '@material-ui/icons';





function Logingoogle() {
  //  console.log('env ',process.env.REACT_APP_G_CLIENT_ID)
    let navigate = useNavigate();
    const paperStyle = {display: "flex",flex: "column",flexFlow:"column wrap",justifyContent:"center",alignItems:"center",backgroundColor: "#f2f2f2",width:"300px",margin: "auto",marginTop:"10%",borderRadius:"10px"};
    const upperHead = {margin: "10% 10% 10% 10%" };
    const googleButtonStyle = {margin:"10% 10% 10% 10%"}; 
    

    const responseGoogleSuccess = (response) => {
    /*    console.log(response);        
          console.log(response.tokenObj.token_type); 
    */
//       console.log(response.profileObj.email); //get email address from people who login in google
//       console.log(response.accessToken);

        
        const profileEmail = response.profileObj.email;
        const tokenParam = response.accessToken;
        const myToken = {
            myemail: profileEmail,
            myAccessToken: tokenParam
        }
        console.log('katim ',profileEmail.length)
      
        switch (profileEmail) {
            case "dwpService@dwp.com":
            case "sumitr.p@dwp.com":                
            case "sayampol.c@dwp.com":
            case "benjaporn.k@dwp.com":
            case "danny.b@dwp.com":        
            case "kittiphot.b@dwp.com": 
            case "penthai.n@dwp.com":   
            case "michael.h@dwp.com":
            case "brenton.m@dwp.com":
            case "scott.w@dwp.com":
            case "geoff.m@dwp.com":
            case "david.r@dwp.com":
            case "angus.r@dwp.com":
            case "ian.t@dwp.com":
            case "sarinrath.k@dwp.com":
            case "scott.c@dwp.com":
            case "david.b@dwp.com":                
            case "ron.b@dwp.com":
            case "neil.c@dwp.com":
            case "rebecca.p@dwp.com":
            case "katherine.d@dwp.com":
            case "david.h@dwp.com":
            case "ivana.s@dwp.com":
            case "jorge.o@dwp.com":
            case "john.c@dwp.com":    
            case "john.b@dwp.com":
            case "leonard.l@dwp.com":
            case "rhoda.p@dwp.com":
            case "charlie.k@dwp.com":
            case "quyen.l@dwp.com":
            case "robert.t@dwp.com":
            case "samantha.b@dwp.com":
            case "phatcharee.k@dwp.com":
            case "ryan.mc@dwp.com":
            case "sean.l@dwp.com":
            case "percy.d@dwp.com":            
                navigate("/app",{state: myToken}) 
                break
            default:
                navigate("/erro",{state: myToken}) 
        }

    };
        const responseGoogleFailure = (response) => {
        console.log('Error while Sign-in Google ' + response);       

    };
  

  return (
     
      <Grid>
            <div elevation={10}  >
                <div  style={paperStyle}>
                    <div style={upperHead}>
                        <Avatar><LockIcon /></Avatar>
                        <div style={{paddingTop : "10px"}}>
                           <Typography >Please Sign-in before using ESG application.</Typography>
                        </div>
                    </div>        
                    
                    <div style={googleButtonStyle}>
                        <GoogleLogin
                            clientId={process.env.REACT_APP_G_CLIENT_ID}
                            scope={"https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"}
                            buttonText='Sign in with Google'
                            onSuccess={responseGoogleSuccess}
                            onFailure={responseGoogleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div> 
            </div> 
      </Grid>
     
    
  )
}

export default Logingoogle 