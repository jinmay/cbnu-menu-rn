import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MenuScreen from "../screens/Menu";
import WeatherScreen from "../screens/Weather";
import TabBarIcon from "../components/TabBarIcon";
import NoticeScreen from "../screens/Notice";

const TabNavigation = createBottomTabNavigator(
  {
    // Notice: {
    //   screen: NoticeScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ focused }) => (
    //       <TabBarIcon
    //         name={Platform.OS === "ios" ? "ios-paper" : "md-paper"}
    //         focused={focused}
    //       />
    //     )
    //   }
    // },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            name={Platform.OS === "ios" ? "ios-nutrition" : "md-nutrition"}
            focused={focused}
          />
        )
      }
    }
    // Weather: {
    //   screen: WeatherScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ focused }) => (
    //       <TabBarIcon
    //         name={
    //           Platform.OS === "ios" ? "ios-partly-sunny" : "md-partly-sunny"
    //         }
    //         focused={focused}
    //       />
    //     )
    //   }
    // }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {}
    }
  }
);

export default createAppContainer(TabNavigation);
