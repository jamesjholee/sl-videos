import { useEffect, useState } from 'react';
import { fetchVideos } from './api/fastApi';
import { useVideoContext } from '../context/VideoContext';
import VideoCard from '../components/VideoCard';
import { Box, Grid, Spinner } from '@chakra-ui/react';

const HomePage = () => {
  const { state, dispatch } = useVideoContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetchVideos(state.user_id);
        dispatch({ type: 'SET_VIDEOS', payload: response.data });
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (state.user_id) {
      getVideos();
    }

  }, [dispatch, state.user_id]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} p={4}>
        {state.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
