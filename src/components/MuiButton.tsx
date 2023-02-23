import {Button, Stack} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MuiButton = () => {
  return (
    <div>
        <Stack spacing={4}>
            <Stack spacing={2} direction='row' display='block'>
                <Button variant='text'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>
            <Stack spacing={2} direction='row' display='block'>
                <Button color='primary' variant='contained'>Primary</Button>
                <Button color='secondary' variant='contained'>Secondary</Button>
            </Stack>
            <Stack spacing={2} display='block' direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            <Stack spacing={2} display='block' direction='row'>
                <Button startIcon={<ArrowForwardIosIcon/>} variant='contained' size='medium'>Start</Button>
            </Stack>
        </Stack>
    </div>
  )
}

export default MuiButton