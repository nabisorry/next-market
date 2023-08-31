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
import Head from 'next/head';

const fetcher = async (url: string) => (await axios.get(url)).data;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="nabi market" key="meta:title" />
        <meta
          name="description"
          content="무엇이든 사고파는 마켓"
          key="meta:description"
        />
        {/* SNS 공유 썸네일 정보 */}
        <meta property="og:title" content="naibi market" key="meta:og:title" />
        <meta property="og:description" content="무엇이든 사고파는 마켓" />
        <meta property="og:image" content="" key="meta:og:image" />
        <meta property="og:site_name" content="nabi market" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
      </Head>
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
