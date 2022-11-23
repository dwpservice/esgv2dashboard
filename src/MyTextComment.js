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

export default function MyTextComment(props) {
//  console.log('CHECK PROPS',props.holdparentid)
  const {items,setItems} = React.useContext(DataContext) 
  
  const classes = useStyles();
//  console.log('props in child ',props)
  let {label,type,id,parentid,value,variant,myfunc} = props

//  console.log('items at MyTextComment.js ',itemsData)

  const [comment, setComment] = React.useState(props.value)
 
  function updateComment(event){
    
//    console.log('event.target.value is ...',event.target.value)
 //   console.log('event.target.id is ...',event.target.id)

    const newvalue = event.target.value
     setComment(newvalue)
    
     value = newvalue
     
    
       setItems(
            items.map((item) => 
                
                item.id === props.holdparentid
                ?{
                    ...item,
                    details: item.details.map((detail) =>                 
                                detail.info === parentid
                                ? {...detail, comment: event.target.value}
                                : {...detail}
                                ),
                 }
                :{...item}
            
            )
       )
    
     }

//    console.log('ITEM AFTER AFTER UPDATE COMMENT ==> ', items) 

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={ e=> {e.preventDefault()}}>     
        <TextField  id={props.id} 
                    value={comment}  
                    onChange={updateComment} 
                    label="Comment" 
                    variant="outlined" 
                    type="text" 
                    size="small" 
                    style={{width: "300px",marginLeft:"10px",marginRight:"10px",textAlign: "right"}} />
    </form>
  );
}
