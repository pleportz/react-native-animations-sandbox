// @flow

import React, { PureComponent } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import theme from '../../theme';

type PropsType = {};

const initialDiameter = 16;

class ExperimentWithAnimatedSpring extends PureComponent<PropsType> {
  state = {
    animatedDiameter: new Animated.Value(initialDiameter),
  };

  animatedRadius = Animated.divide(this.state.animatedDiameter, 2);

  componentDidMount() {
    Animated.spring(this.state.animatedDiameter, {
      toValue: 120,
      friction: 2,
      tension: 10,
      // useNativeDriver: true, // currently width and height cannot be animated with useNativeDriver: true
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.baseCircleStyle,
            {
              width: this.state.animatedDiameter,
              height: this.state.animatedDiameter,
              borderRadius: this.animatedRadius,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseCircleStyle: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.blue,
  },
});

export default ExperimentWithAnimatedSpring;
