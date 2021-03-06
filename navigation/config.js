import { createStackNavigator } from "react-navigation";

export const createStack = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        headerStyle: {
          borderBottomWidth: 0
        },
        headerTitleStyle: {}
      }
    }
  });
