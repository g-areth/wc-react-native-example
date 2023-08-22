import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {providerMetadata, sessionParams} from './consts';

function App(): JSX.Element {
  const {provider, open, isConnected} = useWalletConnectModal();

  const onPress = () => {
    if (isConnected) {
      console.log('disconnecting....');
      return provider?.disconnect();
    }
    return open();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {isConnected && (
          <Text style={styles.text}>
            Connected {provider?.session?.peer.metadata.name}
          </Text>
        )}

        <Button
          title={isConnected ? 'Disconnect' : 'Connect Wallet'}
          onPress={onPress}
        />
      </View>

      <WalletConnectModal
        // TODO replace before publish
        projectId={'PROJECT_ID_HERE'}
        providerMetadata={providerMetadata}
        sessionParams={sessionParams}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {flexGrow: 1, backgroundColor: '#fff'},
  container: {justifyContent: 'center', flex: 1},
  text: {alignSelf: 'center'},
});

export default App;
