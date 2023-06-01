import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow:'none',
      borderRadius: 20,
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      width: {xs: '356px', md:'320px'},
      height:'326px',
      margin:'auto'
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2 }}
        />

        <Typography variant="h6">
          {channelDetail?.snippet?.title}
        </Typography>

        {/* Setting subscriber count if any */}
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant='subtitle1'>
            Subscribers: {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
          </Typography>
        )}

      </CardContent>
    </Link>
  </Box>
)
export default ChannelCard