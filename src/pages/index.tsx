/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from '@/components';

const Home: NextPage = () => {
  return (
    <div id="root">
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
       <Header />
      </div>

    </div>
  )
}

export default Home
