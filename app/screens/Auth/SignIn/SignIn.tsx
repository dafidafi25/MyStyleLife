import React from 'react';
import {View, StyleSheet} from 'react-native';

interface ISignInProps {}

export const SignIn: React.FC<ISignInProps> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default SignIn;
