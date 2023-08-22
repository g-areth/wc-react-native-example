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
        'eth_sendTransaction',
        'eth_signTransaction',
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
        'wallet_addEthereumChain',
        'wallet_switchEthereumChain',
      ],
      chains: ['eip155:1'],
      events: ['chainChanged', 'accountsChanged'],
      rpcMap: {},
    },
  },
  optionalNamespaces: {
    eip155: {
      methods: [
        'eth_sendTransaction',
        'eth_signTransaction',
        'eth_sign',
        'personal_sign',
        'eth_signTypedData',
        'wallet_addEthereumChain',
        'wallet_switchEthereumChain',
      ],
      chains: ['eip155:137'],
      events: ['chainChanged', 'accountsChanged'],
      rpcMap: {},
    },
  },
};
