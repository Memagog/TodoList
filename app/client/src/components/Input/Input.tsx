import React, { ChangeEvent, FC, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

interface InputProps {
  setFlag: () => (void);
}

const ListItemComponent: FC<InputProps> = ({setFlag}) => {   
  const [value, setValue] = useState<string>('');

  async function addTodo(data: string){
    try {
      await axios.post('http://localhost:4000/todo', {title: data});
      setFlag();
    } catch (error) {
      console.log(error)
    }
  }
 
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 550 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add New Todo!"  
        value = {value}
        onChange = {(e) => setValue(e.target.value)}      
      />
      <IconButton onClick = {() => addTodo(value)} aria-label="search">
        <AddIcon />
      </IconButton>     
    </Paper>
  );
}

export default ListItemComponent;