import Header from './Header';
import ClientOnly from './ClientOnly';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <Box as="main" p={4}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
