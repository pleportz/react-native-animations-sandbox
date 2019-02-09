// @flow

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';

type PropsType = {};

class ExperimentWithAnimated extends PureComponent<PropsType> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Experiments with react-native Animated</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ExperimentWithAnimated;
