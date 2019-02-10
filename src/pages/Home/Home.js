// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { type NavigationScreenProps } from 'react-navigation';
import { Button } from '../../components';
import theme from '../../theme';

type PropsType = {} & NavigationScreenProps;

class Home extends PureComponent<PropsType> {
  navigateToExperimentWithAnimatedTiming = () => this.props.navigation.navigate('ExperimentWithAnimatedTiming');
  navigateToExperimentWithAnimatedSpring = () => this.props.navigation.navigate('ExperimentWithAnimatedSpring');

  render() {
    return (
      <View style={styles.container}>
        <Button text="Animated.timing" onPress={this.navigateToExperimentWithAnimatedTiming} style={styles.button} />
        <Button text="Animated.spring" onPress={this.navigateToExperimentWithAnimatedSpring} style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginVertical: theme.margin,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 3 * theme.margin,
  },
});

export default Home;
