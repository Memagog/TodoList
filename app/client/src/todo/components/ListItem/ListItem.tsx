import { Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import './ListItem.scss';
import { FC } from 'react';
import { Todo } from '../../model/todo-model/todo';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../store/hooks';
import { deleteTodoAsync, updateTodoAsync } from '../../redux/todoSlice/todoSlice';

interface ListItemProps {
    todo: Todo;
    setFlag: () => (void);
}

export const ListItemComponent: FC<ListItemProps> = ({todo, setFlag}) => {
  const dispatch = useAppDispatch();

  function changeStatus(id: number, status: boolean){
    dispatch(updateTodoAsync({id, status})).then(() => setFlag());    
  }
  
  function removeById(id: number){
    dispatch(deleteTodoAsync(id)).then(() => setFlag()); 
  }

  return (       
    <ListItem       
      key = {todo.id}     
      secondaryAction={
        <Checkbox
          edge="end"
          onClick = {() => changeStatus(todo.id, todo.status) }
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
