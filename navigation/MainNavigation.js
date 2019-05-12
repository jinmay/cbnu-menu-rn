import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from './TabNavigation';

const MainNavigation = createStackNavigator({
  Tabs: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(MainNavigation);