import React from 'react'
import {Button, Stack} from '@mui/material'

const MuiButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Button variant='text' href='https://google.com'>Txt</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
    </Stack>
  )
}

export default MuiButton