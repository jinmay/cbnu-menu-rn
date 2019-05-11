import React from 'react';
import { AppLoading, Font, Asset } from "expo";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TabNaviagation from './navigation/TabNavigation';

export default class App extends React.Component {
  state = {
    loaded: false
  }

  handleError = (e) => console.log(e);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    await Asset.loadAsync([

    ]);
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <TabNaviagation />;
    } else {
      return (
        <AppLoading 
          startAsync={this.loadAssets} 
          onFinish={this.handleLoaded} 
          onError={this.handleError}
        />
      );
    }
  }
}