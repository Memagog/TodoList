import { Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React, { FC, ReactElement } from 'react'
import { Todo } from '../../../types/types'
import DeleteIcon from '@mui/icons-material/Delete';
interface ListItemProps {
    todo: Todo;
}

export const ListItemComponent: FC<ListItemProps> = ({todo}) => {
    
   
    return (
       
        <ListItem       
            key = {todo.id}     
            secondaryAction={
              <Checkbox
                edge="end"
                // onChange={handleToggle(value)}
                checked={todo.status?true: false}               
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <DeleteIcon />
              </ListItemAvatar>
              <ListItemText  primary={`${todo.id}. ${todo.title}. ${todo.status}`} />
            </ListItemButton>
          </ListItem>
    )
}
