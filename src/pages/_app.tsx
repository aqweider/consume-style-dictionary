/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React, {useEffect, useState} from "react";
import type { AppProps } from 'next/app';
import { NextPage } from 'next'
import { GlobalStyles } from 'twin.macro';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css'
import { DEFAULT_THEME } from '@/themes';
import { setTheme } from '@/themes/utils';

type GetLayoutFunc = (page: React.ReactElement) => React.ReactElement
export type NextPageWithLayout = NextPage & {
  getLayout: GetLayoutFunc
}

function MyApp({ Component, pageProps }: AppProps & {Component: NextPageWithLayout}) {
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    setTheme(DEFAULT_THEME);
  }, []);

  return (
    <div className="page-container">
      <GlobalStyles />
      {
        getLayout(<Component {...pageProps} />)
      }
    </div>
  )
}
export default MyApp
