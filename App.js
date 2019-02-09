/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import AppNavigator from './src/navigation';

type PropsType = {};
export default class App extends Component<PropsType> {
  render() {
    return <AppNavigator />;
  }
}
