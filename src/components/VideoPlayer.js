import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, Text } from '@chakra-ui/react';

const VideoPlayer = ({ videoUrl }) => {
  // const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1);

  const increasePlaybackRate = () => {
    setPlaybackRate((prevRate) => Math.min(prevRate + 0.5, 2)); // Max speed is 2x
  };

  const decreasePlaybackRate = () => {
    setPlaybackRate((prevRate) => Math.max(prevRate - 0.5, 0.5)); // Min speed is 0.5x
  };

  return (
    <div className='flex max-w-2xl mx-auto px-4' >
      <Box className='min-h-[360px] min-w-[640px] aspect-w-16 aspect-h-9'>
        <ReactPlayer
          className='h-full w-full rounded-lg'
          url={videoUrl}
          // playing={playing}
          volume={volume}
          playbackRate={playbackRate}
          controls
          width="100%"
          height="100%"
        />
      </Box>
      <Box className='p-5' mt={2}>
        <Box mt={2}>
          <div>Volume</div>
          <Slider value={volume} min={0} max={1} step={0.1} onChange={setVolume}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box mt={2}>
          <div>Playback Speed</div>
          <Box mt={2}>
          <Flex alignItems="center" justifyContent="center" mt={2}>
            <Button onClick={decreasePlaybackRate} mr={2}>
              -
            </Button>
              <Text mx={4}>{playbackRate}x</Text>
            <Button onClick={increasePlaybackRate} ml={2}>
              +
            </Button>
          </Flex>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default VideoPlayer;
