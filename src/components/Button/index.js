// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';

type PropsType = {
  backgroundColor?: string,
  borderColor?: string,
  text: string,
  style?: any,
  textStyle?: any,
  onPress?: () => void,
  disabled?: boolean,
  isLoading?: boolean,
  loaderColor?: string,
};

const BUTTON_HEIGHT = 40;

export class Button extends PureComponent<PropsType> {
  render() {
    const {
      backgroundColor,
      borderColor,
      style,
      text,
      textStyle,
      disabled,
      onPress,
      isLoading,
      loaderColor,
    } = this.props;

    const isDisabled = disabled || isLoading || !onPress;

    return (
      <TouchableOpacity
        style={[
          styles.container,
          style,
          backgroundColor && { backgroundColor },
          disabled && styles.disabled,
          borderColor && { borderColor, borderWidth: 1 },
        ]}
        disabled={isDisabled}
        onPress={onPress}
        activeOpacity={0.7}>
        {text && (
          <View style={styles.textContainer}>
            {isLoading ? (
              <ActivityIndicator color={loaderColor || theme.colors.white} />
            ) : (
              <Text style={[styles.text, textStyle]}>{text}</Text>
            )}
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    backgroundColor: theme.colors.blue,
    paddingVertical: 0,
    paddingHorizontal: BUTTON_HEIGHT / 2,
  },
  text: {
    color: theme.colors.white,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: theme.colors.lightGrey,
  },
});
