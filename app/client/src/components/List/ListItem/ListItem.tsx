import { Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import './ListItem.css';
import { FC } from 'react';
import { Todo } from '../../../types/types';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { deleteTodoHttp, updateTodoHttp } from '../../../api/http';
interface ListItemProps {
    todo: Todo;
    setFlag: () => (void);
}

export const ListItemComponent: FC<ListItemProps> = ({todo, setFlag}) => {
    
  async function updateStatusTodo(id: number){
    try {
      await axios.put(`${updateTodoHttp}/${id}`);
      setFlag();
    } catch (error) {
      console.log(error)
    }
  }
  
  async function deleteStatusTodo(id: number){
    try {
      await axios.delete(`${deleteTodoHttp}/${id}`);
      setFlag();
    } catch (error) {
      console.log(error)
    }
  }

  return (       
    <ListItem       
      key = {todo.id}     
      secondaryAction={
        <Checkbox
          edge="end"
          onClick = {() => updateStatusTodo(todo.id)}
          checked={todo.status?true: false}               
        />
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <DeleteIcon onClick = {() => deleteStatusTodo(todo.id)} className = "delete-icon" />
        </ListItemAvatar>
          {
            todo.status?
              <s>
               <ListItemText sx = {{color: 'white'}} primary={`${todo.title}.`} />
              </s>
              :
              <div>
               <ListItemText sx = {{color: 'white'}} primary={`${todo.title}.`} /> 
              </div>               
          }
      </ListItemButton>
    </ListItem>
  )
}
