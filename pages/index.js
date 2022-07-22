import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Provider } from 'react-redux';
import store from "store/store";

export default function Home() {
  return (
    <Provider store={store}>
        <div className={styles.container}>
      <Head>
        <title>Crypto Warriors ICO Presale</title>
        <meta name="description" content="Crypto Warriors" />
        <link rel="icon" href="/images/logo-white.png" />
      </Head>

      <main className={styles.main}>
      </main>
      <footer></footer>
    </div>
    </Provider>
  );
}