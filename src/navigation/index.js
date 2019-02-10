import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Pages from '../pages/index';

const AppNavigator = createStackNavigator(
  {
    ExperimentWithAnimatedTiming: {
      screen: Pages.ExperimentWithAnimatedTiming,
      navigationOptions: {
        title: 'Animated.timing',
      },
    },
    ExperimentWithAnimatedSpring: {
      screen: Pages.ExperimentWithAnimatedSpring,
      navigationOptions: {
        title: 'Animated.spring',
      },
    },
    Home: {
      screen: Pages.Home,
      navigationOptions: {
        title: 'My react-native animation sandbox',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
