import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createStyles, makeStyles } from '@mui/styles';

function ButtonTable(){
        const classes = useStyles();
        return (
            <Stack direction="row"
                    spacing={2}
                    // justifyContent="left"
                    >
                <Button variant="contained" className = {classes.root}>Contained</Button>
                <Button variant="contained" className = {classes.root}>
                    Disabled
                </Button>
                <Button variant="contained" className = {classes.root}>
                    Link
                </Button>
            </Stack>
        )
    
}

export default ButtonTable;

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            background: 'linear-gradient(45deg, #f81d1d 0%, #f81d1d 100%)',
        }
    })
    );