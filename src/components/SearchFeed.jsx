import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from './';
import { fetchAPI } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

  const [videosArray, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results For: <span style={{ color: '#FC1503' }}>{searchTerm}</span>
      </Typography>

      {/* Videos section code is in Components */}
      <Videos videos={videosArray} />
    </Box>
  )
}

export default SearchFeed