// @flow

import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

type PropsType = {};

class Home extends PureComponent<PropsType> {

  render() {

    return (
      <View style={styles.container}>
        <Text>My animation sandbox</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
