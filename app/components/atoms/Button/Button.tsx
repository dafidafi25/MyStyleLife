import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button as BtnElements} from '@rneui/themed';

interface IButtonProps {}

// Todo Theming Button and setup preset
export const Button: React.FC<IButtonProps> = () => {
  return (
    <View style={styles.container}>
      <BtnElements title={'Ini Button'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Button;
