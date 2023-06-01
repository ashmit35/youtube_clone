import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardContent, CardMedia } from "@mui/material";
import { Videos, ChannelCard } from './'
import { fetchAPI } from "../utils/fetchAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {

    // fetching the details of the channel
    fetchAPI(`channels?part="snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

    // searching the videos of the channel and ordering by date and then using them to display on the ChannelDetails page
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data.items));
  }, [id])
  return (
    <Box minHeight='95vh'>

      {/* banner and logo box */}
      <Box>
        <CardMedia
          image={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt={channelDetail?.snippet?.title}
          sx={{ height: '50vh', width: '100%', objectFit: 'cover', mb: '-100px' }}
        />

        <ChannelCard channelDetail={channelDetail} />
      </Box>

      {/* Video list box */}
      <Box display='flex' p={2}>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail