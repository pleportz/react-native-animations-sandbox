// @flow

import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { type NavigationScreenProps } from 'react-native';
import { Button } from '../../components';
import theme from '../../theme';

type PropsType = {} & NavigationScreenProps;

class Home extends PureComponent<PropsType> {
  navigateToExperimentWithAnimated = () => this.props.navigation.navigate('ExperimentWithAnimated');

  render() {
    return (
      <View style={styles.container}>
        <Text>My animation sandbox</Text>
        <Button text="react-native Animated" onPress={this.navigateToExperimentWithAnimated} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 3 * theme.margin,
  },
});

export default Home;
