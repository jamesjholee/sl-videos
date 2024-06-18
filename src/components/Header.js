import Link from 'next/link';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Heading size="md">Video App</Heading>
        <Flex>
          <Link href="/" passHref>
            <Box as="a" mx={2}>Home</Box>
          </Link>
          <Link href="/upload" passHref>
            <Box as="a" mx={2}>Upload Video</Box>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
