import {
  Button,
  InputCheckBox,
  Spacer,
  Text,
  InputText,
} from '@components/atoms';
import {useAppSelector} from '@hooks/useAppSelector';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {mockAuthLoading} from '@store/features/auth/Auth.action';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

interface ISignInProps {}

export const SignIn: React.FC<ISignInProps> = () => {
  const isLoading = useAppSelector(state => state.Loading.isLoading);
  const navigation = useBaseNavigation();
  const dispatch = useDispatch();

  const onSignIn = async () => {
    await dispatch(mockAuthLoading() as any);
    navigation.navigate('OnBoardingScreenSignin');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} textType="AuthHeader">
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <InputCheckBox label="Remember Me?" />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text textType="label">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={4} />
        <Button
          title={isLoading ? 'Submitting' : 'Sign In'}
          fullWidth
          variant="secondary"
          disabled={isLoading}
          onPress={onSignIn}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default SignIn;
