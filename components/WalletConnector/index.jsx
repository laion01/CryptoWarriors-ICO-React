import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import WalletButton from './WalletButton';

import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

const MetamaskWallet = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56,97]
});

const CoinbaseWallet = new WalletLinkConnector({
    url: `https://data-seed-prebsc-2-s2.binance.org:8545`,
    appName: "Crypto Warriors ICO Platform",
    supportedChainIds: [1, 3, 4, 5, 42, 56,97],
});

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://data-seed-prebsc-2-s2.binance.org:8545`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

export default function WalletConnector() {

    const { deactivate, activate, account, library, chainId, provider } = useWeb3React();
    const [ loading, setLoading] = useState(false);
    
    useEffect(() => {
        switchNetwork();
    }, [account, chainId, provider])


    const handleConnectProvider = async(provider) => {
        // Set the UI state to loading to prevent further interaction
        setLoading(true);
        switch(provider) {
            case 'WalletConnect':
                await activate(WalletConnect);
                break;
            case 'Coinbase':
                await activate(CoinbaseWallet);
                break;
            case 'MetaMask':
                console.log('metamask')
                await activate(MetamaskWallet);
                break;
            default:
                activate(MetamaskWallet);
        }
        setLoading(false);
        console.log(chainId);
        await switchNetwork();
    };

    // example of switching or adding network with Harmony Mainnet
    const switchNetwork = async () => {
        try {
            await library.provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x61" }],
            });
        } catch (switchError) {
            // 4902 error code indicates the chain is missing on the wallet
            if (switchError.code === 4902) {
                try {
                await library.provider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                    {
                        chainId: "0x38",
                        rpcUrls: ["https://bsc-dataseed1.binance.org"],
                        chainName: "Binance Smart Chain Mainnet",
                        nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
                        blockExplorerUrls: ["https://bscscan.com"],
                        // iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
                    }
                    ],
                });
                } catch (error) {
                console.error(error)
                }
            }
        }
    };

    return (
        <div className="z-40 absolute flex flex-col justify-center p-[20px] bg-[white] top-[50px] right-[0px] border border-[lightgray] min-w-[280px] rounded-[5px]">
            <div className="w-full my-[20px]">
                <Image
                    src= { account ? '/images/svg/unlock.svg' : '/images/svg/lock.svg'}
                    alt=''
                    width={160}
                    height={160}
                />
            </div>
            <p className='mb-[20px] text-[24px]'>{account ? account.substring(0, 6) + "..." + account.substring(account.length - 4) : loading ? 'Connecting...' : 'Connect your wallet'}</p>
                { !account &&
                    <div className='flex flex-col'>
                        <WalletButton label={'Coinbase'} icon={'/images/svg/coinbaseicon.svg'} handleConnect={handleConnectProvider}/>
                        <WalletButton label={'MetaMask'} icon={'/images/svg/metamaskicon.svg'} handleConnect={handleConnectProvider}/>
                        <WalletButton label={'WalletConnect'} icon={'/images/svg/WalletConnecticon.svg'} handleConnect={handleConnectProvider}/>
                    </div>
                }
                { account &&
                    <div className='flex flex-col'>
                        <WalletButton label={'Disconnect'} icon={'/images/svg/lock.svg'} handleConnect={deactivate}/>
                    </div>
                }
        </div>
    );
}