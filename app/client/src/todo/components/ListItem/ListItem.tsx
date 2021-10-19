import { Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import './ListItem.scss';
import { FC } from 'react';
import { Todo } from '../../model/todo-model/todo';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo, updateStatusTodo } from '../../services/api/api';

interface ListItemProps {
    todo: Todo;
    setFlag: () => (void);
}

export const ListItemComponent: FC<ListItemProps> = ({todo, setFlag}) => {

  function changeStatus(id: number){
    updateStatusTodo(id).then(() => setFlag());    
  }
  
  function removeById(id: number){
    deleteTodo(id).then(() => setFlag());  
  }

  return (       
    <ListItem       
      key = {todo.id}     
      secondaryAction={
        <Checkbox
          edge="end"
          onClick = {() => changeStatus(todo.id) }
          checked = { todo.status? true: false }               
        />
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <DeleteIcon onClick = {() => removeById(todo.id)} className = "delete-icon" />
        </ListItemAvatar>
          {
            todo.status?
              <s>
               <ListItemText sx = {{color: 'white', paddingTop: '5px', paddingBottom: '5px',}} primary={`${todo.title}`} />
              </s>
              :
              <div>
               <ListItemText sx = {{color: 'white', paddingTop: '5px', paddingBottom: '5px',}} primary={`${todo.title}`} /> 
              </div>               
          }
      </ListItemButton>
    </ListItem>
  )
}
