import {Button, Spacer, Text, InputText} from '@components/atoms';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IForgotPasswordProps {}

export const ForgotPassword: React.FC<IForgotPasswordProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} textType="header">
          Forgot Password
        </Text>
      </View>
      <View style={{flex: 4, paddingHorizontal: 16}}>
        <InputText label={'Email'} />
        <Spacer height={18} />
        <InputText label={'Password'} obscure />
        <Spacer height={18} />
        <Spacer height={4} />
        <Button title="Send" fullWidth variant="secondary" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default ForgotPassword;
