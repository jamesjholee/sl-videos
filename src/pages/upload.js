import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createVideo } from './api/fastApi';
import { Button, Input, Textarea, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { useVideoContext } from '../context/VideoContext';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const { state, dispatch } = useVideoContext();
  const router = useRouter();


  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!description) newErrors.description = 'Description is required';
    if (!videoUrl) {
      newErrors.videoUrl = 'Video URL is required';
    } else if (!/^https?:\/\/.+/.test(videoUrl)) {
      newErrors.videoUrl = 'Video URL must be a valid URL';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    const newVideo = {
      title,
      description,
      video_url: videoUrl,
      user_id: state.user_id,
    };

    try {
      const response = await createVideo(newVideo);
      dispatch({ type: 'ADD_VIDEO', payload: response });
      setTitle('');
      setDescription('');
      setVideoUrl('');
      setErrors({});
      router.push('/');
    } catch (error) {
      console.error('Failed to create video:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className='w-full max-w-2xl mx-auto px-4' onSubmit={handleSubmit}>
      <FormControl id="title" mb={4} isInvalid={errors.title}>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <FormLabel className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title
          </FormLabel>
          <Input id='grid-title' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" required />
          <FormErrorMessage>{errors.title}</FormErrorMessage>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <FormLabel className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Video URL
          </FormLabel>
          <Input id='grid-url' className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="Video URL" type="text" required />
          <FormErrorMessage>{errors.videoUrl}</FormErrorMessage>
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className="w-full px-3 md:mb-0">
          <FormLabel className="block dark:text-white uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Your message</FormLabel>
          <Textarea className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></Textarea>
          <FormErrorMessage>{errors.description}</FormErrorMessage>
        </div>
      </div>
      </FormControl>
      <Button
        className='className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type="submit"
        isLoading={isSubmitting}
        isDisabled={isSubmitting}>
          Upload Video
        </Button>      
    </form>
  );
};

export default UploadPage;
