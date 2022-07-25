import { Provider } from 'react-redux';
import { store } from '/store/store';
import Layout from 'components/layout/Layout';
import '../styles/globals.css';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from "ethers";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Web3ReactProvider
        getLibrary={getLibrary}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </Provider>
  )
}

export default MyApp
