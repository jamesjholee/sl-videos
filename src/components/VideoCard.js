import { Box, Image, Text, Heading, Link as ChakraLink, AspectRatio } from '@chakra-ui/react';
import Link from 'next/link';

const VideoCard = ({ video }) => {
  const NEWURL = video.video_url.replace('watch?v=', 'embed/')
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
      <Link href={`/video/${video.id}`} passHref>
        <ChakraLink>
          <AspectRatio maxW='560px' ratio={1}>
            <iframe
              title={video.title}
              src={NEWURL}
              allowFullScreen
            />
          </AspectRatio>
          <Box p={4}>
            <Heading size="md">{video.title}</Heading>
            <Text mt={2}>{video.description}</Text>
          </Box>
        </ChakraLink>
      </Link>
    </Box>
  );
};

export default VideoCard;
