import {
  Button,
  InputCheckBox,
  Spacer,
  Text,
  InputText,
} from '@components/atoms';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ISignInProps {}

export const SignIn: React.FC<ISignInProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} textType="header">
          Sign In
        </Text>
      </View>
      <View style={{flex: 4, paddingHorizontal: 16}}>
        <InputText label={'Email'} />
        <Spacer height={18} />
        <InputText label={'Password'} obscure />
        <Spacer height={18} />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <InputCheckBox label="Remember Me?" />
          <TouchableOpacity>
            <Text textType="label">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={4} />
        <Button title="Sign In" fullWidth variant="secondary" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default SignIn;
