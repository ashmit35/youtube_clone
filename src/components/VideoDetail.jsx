import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Box, Typography, Stack } from "@mui/material"
import { Videos } from './'
import { fetchAPI } from "../utils/fetchAPI"

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchAPI(`videos?part=snippet.statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
  }, [id])


  if (!videoDetail?.snippet) return "Loading...";
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>

        <Box flex={1}>

          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>

            <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls />

            <Typography px={2} mt={1} fontWeight='bold' variant="h5" sx={{ color: 'white' }}>
              {videoDetail?.snippet?.title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' sx={{ color: 'white' }} px={2} py={1}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>

                <Typography p={0.5}variant={{ sm: 'subtitle1', md: 'h6' }} color='white' sx={{backgroundColor:'grey',borderRadius:'5px',opacity:'0.7'}}>
                  {videoDetail?.snippet?.channelTitle}
                </Typography>

              </Link>

              <Typography sx={{opacity:0.7}}>
                {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
              </Typography>
              <Typography sx={{opacity:0.7}}>
              {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
              </Typography>
            </Stack>

          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>


    </Box>
  )
}

export default VideoDetail