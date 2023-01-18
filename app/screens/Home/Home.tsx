import React from 'react';
import {View, StyleSheet} from 'react-native';

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
