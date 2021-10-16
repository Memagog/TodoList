


import * as React from 'react';
import List from '@mui/material/List';
interface ListProps<T>{
    items: T[],
    renderItem: (item: T) => React.ReactNode,
}

export default function ListComponent<T>(props: ListProps<T>) {
  

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <div>
            {props.items.map(props.renderItem)}
        </div>      
    </List>
  );
}
