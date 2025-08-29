import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ContextProvider } from "../contexts/Web3Context";
import { QuizContextProvider } from "../contexts/QuizContext";
import { theme } from "../theme";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/* Mobile viewport meta tag for responsive design */}
      <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" 
      />
    </Head>
    <Web3ContextProvider>
      <QuizContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QuizContextProvider>
    </Web3ContextProvider>
  </>
);

export default App;