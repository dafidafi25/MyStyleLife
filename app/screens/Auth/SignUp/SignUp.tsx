import {Button, Spacer, Text, InputText} from '@components/atoms';
import {BaseNavigationParams} from '@navigators/NavigatorParams';
import {useNavigation} from '@react-navigation/native';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ISignUpProps {}

export const SignUp: React.FC<ISignUpProps> = () => {
  const navigation = useNavigation<BaseNavigationParams>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} textType="header">
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
          title="Sign Up"
          fullWidth
          variant="secondary"
          onPress={() => navigation.navigate('SignUpDetailScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});

export default SignUp;
