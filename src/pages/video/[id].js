import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchComments, postComment, fetchVideo } from '..//api/fastApi';
import { useVideoContext } from '../../context/VideoContext';
import VideoPlayer from '../../components/VideoPlayer';
import CommentSection from '../../components/CommentSection';
import { Box, Spinner, Text } from '@chakra-ui/react';

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { state, dispatch } = useVideoContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      console.log(id)
      const getComments = async () => {
        try {
          const response = await fetchComments(id);
          dispatch({ type: 'SET_COMMENTS', payload: response });
        } catch (error) {
          console.error('Failed to fetch comments:', error);
          dispatch({ type: 'SET_COMMENTS', payload: [] });
        } finally {
          setIsLoading(false);
        }
      };

      const getVideo = async () => {
        try {
          const response = await fetchVideo(id);
          dispatch({ type: 'SET_VIDEO', payload: response });
        } catch (error) {
          console.error('Failed to fetch video:', error);
          dispatch({ type: 'SET_VIDEO', payload: [] });
        } finally {
          setIsLoading(false);
        }
      };

      getVideo()
      getComments();
    }
  }, [id, dispatch]);

  const handleCommentSubmit = async (comment) => {
    try {
      const response = await postComment(id, comment, state.user_id);
      dispatch({ type: 'ADD_COMMENT', payload: response });
      const comments = await fetchComments(id);
      dispatch({ type: 'SET_COMMENTS', payload: comments });
    } catch (error) {
      console.error('Failed to post comment:', error);
    }
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  // if (!state.comments || state.comments.length === 0) {
  //   return (
  //     <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
  //       <Text>No comments available</Text>
  //     </Box>
  //   );
  // }

  console.log(state)

  return (
    <Box>
      <VideoPlayer videoUrl={state.video.video_url} />
      <CommentSection comments={state.comments} onCommentSubmit={handleCommentSubmit} />
    </Box>
  );
};

export default VideoPage;
