'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

interface NetworkContextType {
  network: WalletAdapterNetwork;
  setNetwork: (network: WalletAdapterNetwork) => void;
}

const NetworkContext = createContext<NetworkContextType>({
  network: WalletAdapterNetwork.Devnet,
  setNetwork: () => null,
});

export function useNetwork() {
  return useContext(NetworkContext);
}

interface NetworkProviderProps {
  children: ReactNode;
}

export function NetworkProvider({ children }: NetworkProviderProps) {
  const [network, setNetwork] = useState<WalletAdapterNetwork>(WalletAdapterNetwork.Devnet);

  return (
    <NetworkContext.Provider value={{ network, setNetwork }}>
      {children}
    </NetworkContext.Provider>
  );
}