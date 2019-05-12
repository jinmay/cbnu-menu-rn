import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/detail";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    },
    Detail: {
      screen: DetailScreen
    }
  },
  {}
);

export default createAppContainer(MainNavigation);
