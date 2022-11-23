import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { DataContext } from './DataService';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MyTextReason(props) {
//  console.log('CHECK PROPS',props.holdparentid)
let {parentid,holdparentid,value} = props
const {items,setItems} = React.useContext(DataContext) 
  
  
  const classes = useStyles();
//  console.log('props in child ',props)
  

//  console.log('items at MyTextReason.js ',itemsData)

 // console.log('state - cancelvalue ====> ', cancelvalue)

  const [reasoncomment, setReasonComment] = React.useState(props.value)
 // console.log('props.value ใน MyTextReason ...',props.value) 
  
 

  function updateComment(event){
  //  console.log('props.id is...', id)
  //  console.log('event.target.value is ...',event.target.value)
  //  console.log('event.target.id is ...',event.target.id)

    event.preventDefault() 
    const newvalue = event.target.value
     setReasonComment(newvalue)
    
    // value = newvalue
    //   console.log('props.holdparentid ...',props.holdparentid)
    //   console.log('props.parentid ...',props.parentid)
   

       
        
            setItems(
                    items.map((item) => 
                        
                        item.id === props.holdparentid
                        ?{
                            ...item,
                            details: item.details.map((detail) =>                 
                                        detail.info === props.parentid  /* ต้องเป็นบันทัดที่ active หรือบันทัดที่ Icon ถูกคลิก  */
                                        ? {...detail, reasoncomment: event.target.value}
                                        : {...detail}
                                        ),
                        }
                        :{...item}
                    
                    )
            )
       
        
    
     }

//console.log("DETECT CLICK CANCEL BUTTON ...",props.detectcancel)
  //  console.log('ITEM AFTER AFTER UPDATE COMMENT ==> ', items) 

  return (
      
        <TextField  id={props.id} 
                    value={reasoncomment}  
                    onChange={updateComment} 
                    label="Comment" 
                    variant="outlined" 
                    type="text" 
                    placeholder="Type here ..."
                    multiline
                    autoFocus
                    fullWidth 
                    
                    />
   
  );
}
