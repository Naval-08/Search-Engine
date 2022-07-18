import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
    const [change, setChange] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hello")
    }


    const handleChange = (event) => {
        setChange(event.target.value)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <Paper
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000, marginLeft: '70px', marginTop: '15px', border: "1px solid black", borderRadius: '20px' }}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={handleChange}
                        value={change}
                    />

                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper >
            </form>
        </>
    );
}
