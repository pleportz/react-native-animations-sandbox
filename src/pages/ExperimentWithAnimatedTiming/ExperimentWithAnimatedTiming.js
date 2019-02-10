// @flow

import React, { PureComponent } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import theme from '../../theme';
import { catImageUrl } from '../../config';

type PropsType = {};

const initialDiameter = 48;

class ExperimentWithAnimatedTiming extends PureComponent<PropsType> {
  state = {
    animatedDiameter: new Animated.Value(initialDiameter),
  };

  animatedRadius = Animated.divide(this.state.animatedDiameter, 2);

  componentDidMount() {
    Animated.timing(this.state.animatedDiameter, {
      toValue: 120,
      duration: 1500,
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
        <Animated.Image
          source={{ uri: catImageUrl }}
          style={{
            width: this.state.animatedDiameter,
            height: this.state.animatedDiameter,
            borderRadius: this.animatedRadius,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  baseCircleStyle: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.blue,
  },
});

export default ExperimentWithAnimatedTiming;
