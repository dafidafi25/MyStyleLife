import {ThemeImages} from '@assets/images';
import {Button} from '@components/atoms';
import {Spacer} from '@components/atoms/Spacer';
import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IWelcomeProps {}

export const Welcome: React.FC<IWelcomeProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Spacer height={30} />
      <Image source={ThemeImages.Logo} style={styles.logo} />
      <Button />
      <View>
        <Text style={{textAlign: 'center'}}>Already Have an Account</Text>
        <Spacer height={30} />
        <Button />
        <Spacer height={30} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  logo: {alignSelf: 'center'},
});

export default Welcome;
