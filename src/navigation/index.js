import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Pages from "../pages/index";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Pages.Home
  }
});

export default createAppContainer(AppNavigator);
