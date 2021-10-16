import React, { FC, ReactElement } from 'react'
import { Todo } from '../../../types/types'
interface ListItemProps {
    todo: Todo;
}

export const ListItem: FC<ListItemProps> = ({todo}) => {
    return (
        <div>
          {todo.id}. {todo.title}. {todo.status}
        </div>
    )
}
