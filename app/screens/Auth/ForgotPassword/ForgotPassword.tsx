import {Button, Spacer, Text, InputText} from '@components/atoms';
import {useAppSelector} from '@hooks/useAppSelector';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {mockAuthLoading} from '@store/features/auth/Auth.action';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

interface IForgotPasswordProps {}

export const ForgotPassword: React.FC<IForgotPasswordProps> = () => {
  const navigation = useBaseNavigation();
  const isLoading = useAppSelector(state => state.Loading.isLoading);
  const dispatch = useDispatch();

  const onSend = async () => {
    await dispatch(mockAuthLoading() as any);
    navigation.navigate('OTPScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} textType="AuthHeader">
          Forgot Password
        </Text>
      </View>
      <View style={{flex: 4, paddingHorizontal: 16}}>
        <InputText label={'Email'} />
        <Spacer height={18} />
        <InputText label={'Password'} obscure />
        <Spacer height={18} />
        <Spacer height={4} />
        <Button
          title={isLoading ? 'Submitting' : 'Send'}
          fullWidth
          variant="secondary"
          disabled={isLoading}
          onPress={onSend}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default ForgotPassword;
