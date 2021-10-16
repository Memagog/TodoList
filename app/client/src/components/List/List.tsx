


import * as React from 'react';
import List from '@mui/material/List';
interface ListProps<T>{
    items: T[],
    renderItem: (item: T) => React.ReactNode,
}

export default function ListComponent<T>(props: ListProps<T>) {
  

  return (
    <List dense sx={{ width: '100%', maxWidth: 560, bgcolor: '#424242', border: 'solid black 2px'}}>
        <div>
            {props.items.map(props.renderItem)}
        </div>      
    </List>
  );
}
