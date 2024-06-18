import { useState } from 'react';
import { createVideo } from './api/fastApi';
import { useVideoContext } from '../context/VideoContext';

const UploadPage = () => {
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
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="Video URL" />
      <button type="submit">Upload Video</button>
    </form>
  );
};

export default UploadPage;
