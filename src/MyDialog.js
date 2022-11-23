import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyTextReason from './MyTextReason'

export default function MyDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [clickcancel, setClickCancel] = React.useState("F")

//    console.log('props.value ใน MyDialog component ...',props.value)
//    console.log('info ใน MyDialog component ...'+ props.info +' activeinfo คือ ' + props.parentid)
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
    //  console.log('DETECT CLICK CANCEL...')  
    //  setClickCancel(true)
    //  setOpen(false);
      
     
    };
  
    return (
        <div>
            
            {props.info === props.parentid ?
                 
                    <Dialog                    
                        maxWidth='md'
                        open={props.open} 
                        onClose={props.close} 
                        aria-labelledby={`dialogtitle-${props.parentid}`} >

                    <DialogTitle id={`dialogtitle-${props.parentid}`}>Please give us a comment for {props.parentid}.</DialogTitle>
                    <DialogContent>
                    {/* <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                        </DialogContentText>
                    */}
                        <MyTextReason  
                            type="text" 
                            parentid={props.parentid}  
                            holdparentid ={props.holdparentid} 
                            value={props.value}   
                           

                        />
                    </DialogContent>
                    <DialogActions>
                        
                        <Button onClick={props.close} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog> 
           
            : null
            }
        </div>              
        
      );
    }