import React from 'react';
import { AppLoading, Asset } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    loaded: false
  }

  handleError = (e) => console.log(e);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Asset.loadAsync([

    ]);
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    } else {
      return (
        <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError} />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
