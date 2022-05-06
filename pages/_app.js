import '../styles/globals.css';
import Container from '../components/Container';
import { ChakraProvider } from '@chakra-ui/react';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
