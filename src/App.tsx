import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

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

const sessionParams = {
  namespaces: {
    eip155: {
      methods: [
        'personal_sign',
        'eth_sendTransaction',
        'wallet_switchEthereumChain',
      ],
      chains: ['eip155:1', 'eip155:137'],
      events: ['chainChanged', 'accountsChanged'],
    },
  },
};

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: 'red',
        }}>
        {/* TODO add wallet connect issue demo stuff */}
      </ScrollView>

      {/* <WalletConnectModal
          projectId={'YOUR_PROJECT_ID'}
          providerMetadata={providerMetadata}
          sessionParams={sessionParams}
        /> */}
    </SafeAreaView>
  );
}

export default App;
