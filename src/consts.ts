export const providerMetadata = {
  name: 'demo',
  description: 'demo',
  url: '',
  icons: [''],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

export const sessionParams = {
  namespaces: {
    eip155: {
      methods: [
        'personal_sign',
        'eth_sendTransaction',
        // 'wallet_switchEthereumChain',
      ],
      chains: ['eip155:1', 'eip155:137'],
      events: ['chainChanged', 'accountsChanged'],
    },
  },
};
