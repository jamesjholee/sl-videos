import Link from 'next/link';
import {
  Box,
  Flex,
  Heading,
  Image,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex className="mx-auto" justify="space-between" align="center">
        <Heading size="md">
          <Link href="/" passHref>
            <Image src="/assets/FULL_LOGO_WHITE.png" alt="Learning" height="40px" />
          </Link>
        </Heading>
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <Link href="/" passHref>
            <Box as="a" mx={2}>Home</Box>
          </Link>
          <Link href="/upload" passHref>
            <Box as="a" mx={2}>Upload Video</Box>
          </Link>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody className='flex flex-col'>
              <Link href="/" passHref>
                <Box as="a" my={2} onClick={onClose}>Home</Box>
              </Link>
              <Link href="/upload" passHref>
                <Box as="a" my={2} onClick={onClose}>Upload Video</Box>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
