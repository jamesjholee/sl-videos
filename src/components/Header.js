import Link from 'next/link';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Heading size="md">
          <Link href="/" passHref>
            <Image src="/assets/FULL_LOGO_WHITE.png" alt="Learning" height="40px" />
          </Link>
        </Heading>
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
