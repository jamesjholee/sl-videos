import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { VideoProvider, useVideoContext } from '../context/VideoContext';
import Layout from '../components/Layout';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <VideoProvider>
        <UserInitializer>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserInitializer>
      </VideoProvider>
    </ChakraProvider>
  );
}

const UserInitializer = ({ children }) => {
  const { dispatch } = useVideoContext();

  useEffect(() => {
    const user_id = 'john_smith'; // Replace with your actual user_id logic
    dispatch({ type: 'SET_USER_ID', payload: user_id });
  }, [dispatch]);

  return children;
};

export default MyApp;
