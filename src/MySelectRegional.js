import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DataContext } from './DataService';


const useStyles = makeStyles((theme) => ({
 
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
}));

export default function MySelectRegional(props) {

  const {items,setItems} = React.useContext(DataContext)   
  const classes = useStyles();
  const [regional, setRegional] = React.useState('');
  const [open, setOpen] = React.useState(false);
  let {parentid,holdparentid,value} = props

  const handleChange = (event) => {
    setRegional(event.target.value);
    console.log(event.target.value)
    setItems(
        items.map((item) => 
            
            item.id === props.holdparentid
            ?{
                ...item,
                details: item.details.map((detail) =>                 
                            detail.info === props.parentid  /* ต้องเป็นบันทัดที่ active หรือบันทัดที่ Icon ถูกคลิก  */
                            ? {...detail, infoscreen: event.target.value}
                            : {...detail}
                            ),
            }
            :{...item}
        
        )
)


  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
     
      <FormControl className={classes.formControl}>
        <InputLabel id={props.labelid}>{props.labelid}</InputLabel>
        <Select
            labelId={props.labelid}
            id={props.selectid}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={regional}
            onChange={handleChange}
        >
            <MenuItem value=''>{props.labelid}</MenuItem>
            <MenuItem value='Indoor Water Use Reduction'>Indoor Water Use Reduction</MenuItem>
            <MenuItem value='Outdoor Water Use Reduction'>Outdoor Water Use Reduction</MenuItem>
            <MenuItem value='Enhanced Indoor Air Quality Strategies'>Enhanced Indoor Air Quality Strategies</MenuItem>
            <MenuItem value='Optimize Energy Performance'>Optimize Energy Performance</MenuItem>
            <MenuItem value='Rainwater Management'>Rainwater Management</MenuItem>
            <MenuItem value='Protect or Restore Habitat'>Protect or Restore Habitat</MenuItem>
            <MenuItem value='Open Space'>Open Space</MenuItem>
            <MenuItem value='Material Ingredients'>Material Ingredients</MenuItem>
            <MenuItem value='Renewable Energy'>Renewable Energy</MenuItem>
            <MenuItem value='Heat Island Reduction'>Heat Island Reduction</MenuItem>
            <MenuItem value='Thermal Comfort'>Thermal Comfort</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
