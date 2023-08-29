import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { theme } from 'themes';
import GlobalStyle from '../styles/globals';
import { SWRConfig } from 'swr';
import GlobalSpinnerContextProvider from 'contexts/GlobalSpinnerContext';
import AuthContextProvider from 'contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SWRConfig value={{ shouldRetryOnError: false }}>
          <GlobalSpinnerContextProvider>
            <AuthContextProvider>
              <Component {...pageProps} />
            </AuthContextProvider>
          </GlobalSpinnerContextProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
