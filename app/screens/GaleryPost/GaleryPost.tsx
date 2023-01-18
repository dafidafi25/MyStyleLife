import {Spacer} from '@components/atoms';
import NavigationHeader from '@components/molecules/NavigationHeader';
import React from 'react';
import {View, StyleSheet} from 'react-native';

interface IGaleryPostProps {}

export const GaleryPost: React.FC<IGaleryPostProps> = () => {
  return (
    <View style={styles.container}>
      <Spacer height={10} />
      <NavigationHeader title="New Post" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default GaleryPost;
