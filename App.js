import React from "react";
import { StatusBar } from "react-native";
import { AppLoading, Font, Asset } from "expo";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = e => console.log(e);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font,
      bmjua: require("./assets/bmjua.ttf"),
      bmdh: require("./assets/bmdh.ttf")
    });
    await Asset.loadAsync([]);
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <>
          <StatusBar barStyle={"dark-content"} />
          <MainNavigation />
        </>
      );
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
