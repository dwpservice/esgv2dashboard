import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox'
import { DataContext } from './DataService';
import FormControl from '@material-ui/core/FormControl';
import { FormGroup } from '@mui/material';
import { FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MyCheckboxA(props) {
//  console.log('CHECK PROPS',props.holdparentid)
  const {items,setItems,checkleed,setCheckLeed} = React.useContext(DataContext) 

  
  
  function updateCheckboxA(event){
 //   console.log('props.id ...',props.id) /* 1,2,3,...8 */
       
        setItems(
            items.map((item) => 
                
                item.id === props.holdparentid
                ?{
                    ...item,
                    details: item.details.map((detail) =>                 
                                detail.info === props.parentid
                                ? {...detail, 
                                    listcheckbox: detail.listcheckbox.map((mem,idx)=>
                                        idx === 0
                                        ? event.target.checked ? 't': 'f'
                                        : mem
                                        
                                     )

                                  }
                                : {...detail}
                                ),
                 }
                :{...item}
            
            )
       )
       console.log(event.target.checked + "---" + props.parentid + "---" + props.holdparentid)
       if (event.target.checked && props.parentid === "LEED for Neighborhood Development Location"){
          setCheckLeed(true) 
       }else{
          setCheckLeed(false) 
       }
      
  }

  

  return (
    
    props.id === "0Integrative ProcessA" ?
    
    <FormControlLabel 
    value="top"
    control={<Checkbox  id={props.id} 
                        name={props.name} 
                        value={props.value} 
                        parentid={props.parentid} 
                        holdparentid ={props.holdparentid}
                        checked={props.value === "t" ? true:false} 
                        color='primary'                  
                        onClick={updateCheckboxA} 
                        style={{backgroundColor:"#32d95e",borderStyle:"solid",borderRadius:"inherit"}} /> }
    label="Y"
    labelPlacement="top"
    />
    :   
    <Checkbox  id={props.id} 
                        name={props.name} 
                        value={props.value} 
                        parentid={props.parentid} 
                        holdparentid ={props.holdparentid}
                        checked={props.value === "t" ? true:false} 
                        color='primary'                  
                        onClick={updateCheckboxA} 
                        style={{backgroundColor:"#32d95e",borderStyle:"solid",borderRadius:"inherit"}} />   
                 
    
  );
}
