import React, { useState } from 'react'
import { Stack, TextField, MenuItem, Box } from '@mui/material'

const MuiTextfield = () => {
  const [countries, setCountries] = useState<string[]>([])
  const handleCountries = (e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
  }
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={4} display='block'>
        <TextField label='name' variant='filled'/>
        <TextField label='name' variant='standard'/>
        <TextField label='name'/>
      </Stack>
      <Box width='250px'>
        <TextField label='Select Country' select onChange={handleCountries} value={countries} fullWidth SelectProps={{
          multiple: true
        }}>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='BN'>Bangladesh</MenuItem>
          <MenuItem value='AF'>Africa</MenuItem>
        </TextField>
      </Box>
    </Stack>
  )
}

export default MuiTextfield