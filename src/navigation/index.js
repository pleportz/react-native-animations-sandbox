import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Pages from '../pages/index';

const AppNavigator = createStackNavigator(
  {
    ExperimentWithAnimated: {
      screen: Pages.ExperimentWithAnimated,
      navigationOptions: {
        title: 'Experiments with react-native Animated',
      },
    },
    Home: {
      screen: Pages.Home,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
