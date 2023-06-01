import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('')
        }
    }
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: '5px',
                border: '1px solid transparent',
                pl: 1,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}>

            <input value={searchTerm} type="text" className="search-bar" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)}/>
            <IconButton type="submit" sx={{ padding: {sx:'0px',md:'5px'}, color: 'grey'}}>
                <Search></Search>
            </IconButton>
        </Paper>
    )
}

export default SearchBar