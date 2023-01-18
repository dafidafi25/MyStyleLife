import {ThemeImages} from '@assets/images';
import {Button, Text} from '@components/atoms';
import {Spacer} from '@components/atoms/Spacer';
import {BaseNavigationParams} from '@navigators/NavigatorParams';
import {useNavigation} from '@react-navigation/native';
import {colors} from '@themes/colors';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IWelcomeProps {}

export const Welcome: React.FC<IWelcomeProps> = () => {
  const navigation = useNavigation<BaseNavigationParams>();

  return (
    <SafeAreaView style={styles.container}>
      <Spacer height={30} />
      <Image source={ThemeImages.Logo} style={styles.logo} />

      <Button
        title="Sign Up"
        variant="primary"
        outline
        onPress={() => navigation.navigate('SignUpScreen')}
      />

      <View style={{backgroundColor: colors.pink2}}>
        <Spacer height={30} />
        <Text textType="bold" style={{textAlign: 'center'}} fontSize={16}>
          Already Have an Account?
        </Text>
        <Spacer height={30} />
        <Button
          title="Login Here"
          onPress={() => navigation.navigate('LoginScreen')}
        />
        <Spacer height={30} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  logo: {alignSelf: 'center'},
});

export default Welcome;
