import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { theme } from 'themes';
import GlobalStyle from '../styles/globals';
import { SWRConfig } from 'swr';
import GlobalSpinnerContextProvider from 'contexts/GlobalSpinnerContext';
import AuthContextProvider from 'contexts/AuthContext';
import { ShoppingCartContextProvider } from 'contexts/ShoppingCartContext';
import GlobalSpinner from 'components/organisms/GlobalSpinner';
import axios from 'axios';

const fetcher = async (url: string) => (await axios.get(url)).data;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ shouldRetryOnError: false, fetcher }}>
          <GlobalSpinnerContextProvider>
            <ShoppingCartContextProvider>
              <AuthContextProvider>
                <GlobalSpinner />
                <Component {...pageProps} />
              </AuthContextProvider>
            </ShoppingCartContextProvider>
          </GlobalSpinnerContextProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
