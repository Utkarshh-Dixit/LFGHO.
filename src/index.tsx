import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';



const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit CRA demo',
    alchemyId:  process.env.ALCHEMY_ID || 'default_alchemy_id',
    chains: [mainnet],
    walletConnectProjectId: process.env.WALLETCONNECT_ID || 'default_walletconnect_id',
  }
  )
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
