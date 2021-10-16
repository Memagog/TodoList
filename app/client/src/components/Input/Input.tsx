import { TextField } from '@mui/material'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Input({}: Props): ReactElement {
    return (
        <div>
            <TextField sx = {{width: 560}} id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
    )
}
