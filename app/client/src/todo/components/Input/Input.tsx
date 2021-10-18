import React, { FC, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { createTodo } from '../../services/api/api';


interface InputProps {
  setFlag: () => (void);
}

const ListItemComponent: FC<InputProps> = ({setFlag}) => {   
  const [value, setValue] = useState<string>('');

  function addTodo(data: string){ 
    createTodo(data).then(() => setFlag());  
  }
 
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 550 }}    
      onSubmit={
        (e: any) => {          
          e.preventDefault();
          e.stopPropagation();
          addTodo(value);
          setValue('');          
        }
      }      
    >      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add New Todo!"  
        value = {value}
        onChange = {(e) => setValue(e.target.value)}      
      />
      <IconButton       
        onClick = {() => addTodo(value)}       
        aria-label="search"
      >
        <AddIcon />
      </IconButton>     
    </Paper>
  );
}

export default ListItemComponent;