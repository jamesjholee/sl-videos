import { useState } from 'react';
import { Box, Button, Input, Textarea } from '@chakra-ui/react';
import { useVideoContext } from '../context/VideoContext';
import { createVideo } from '../services/api';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const { dispatch } = useVideoContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = { title, description, videoUrl, user_id: 'your_user_id' };
    const response = await createVideo(newVideo);
    dispatch({ type: 'ADD_VIDEO', payload: response.data });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        mb={2}
      />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        mb={2}
      />
      <Input
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Video URL"
        mb={2}
      />
      <Button type="submit">Upload Video</Button>
    </Box>
  );
};

export default UploadForm;
