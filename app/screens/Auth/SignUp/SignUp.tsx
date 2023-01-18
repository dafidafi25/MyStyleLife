import {Button, Spacer, Text, InputText} from '@components/atoms';
import {useAppSelector} from '@hooks/useAppSelector';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {mockAuthLoading} from '@store/features/auth/Auth.action';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

interface ISignUpProps {}

export const SignUp: React.FC<ISignUpProps> = () => {
  const navigation = useBaseNavigation();
  const isLoading = useAppSelector(state => state.Loading.isLoading);
  const dispatch = useDispatch();

  const onSend = async () => {
    await dispatch(mockAuthLoading() as any);
    navigation.navigate('SignUpDetailScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} textType="AuthHeader">
          Sign Up
        </Text>
      </View>
      <View style={{flex: 4, paddingHorizontal: 16}}>
        <InputText label={'Email'} />
        <Spacer height={18} />
        <InputText label={'Mobile'} />
        <Spacer height={18} />
        <InputText label={'Password'} obscure />
        <Spacer height={18} />
        <InputText label={'Confirm Password'} obscure />
        <Spacer height={18} />

        <Button
          title={isLoading ? 'Submitting' : 'Sign Up'}
          fullWidth
          disabled={isLoading}
          variant="secondary"
          onPress={onSend}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default SignUp;
