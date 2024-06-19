import { useState } from 'react';
import { format } from "date-fns";
import { Box, Button, Textarea, Text } from '@chakra-ui/react';

const CommentSection = ({ comments, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim()) {
      onCommentSubmit(comment);
      setComment('');
    }
  };

  return (
    <Box className='max-w-2xl mx-auto px-4' mt={4}>
      <Box className='overflow-auto h-64' mb={4}>
        {comments.map((comment, index) => (
          <Box className='p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900' key={index} p={4} mb={2}>
            <Text className='text-gray-500 dark:text-gray-400'>{comment.content}</Text>
            <div className='flex items-center'>
              <Text className='items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold'>{comment.user_id}</Text>
              <Text className='text-sm text-gray-600 dark:text-gray-400'>{format(new Date(comment.created_at), "MMMM do, yyyy")}</Text>
            </div>
          </Box>
        ))}
      </Box>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        mb={2}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default CommentSection;
