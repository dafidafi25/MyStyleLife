import {Button, Spacer, Text} from '@components/atoms';
import {OTPField} from '@components/atoms/Input/OTPField';
import {useBaseNavigation} from '@hooks/useBaseNavigation';
import {colors} from '@themes/colors';
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IOTPScreenProps {}

export const OTPScreen: React.FC<IOTPScreenProps> = () => {
  const navigation = useBaseNavigation();

  const [otpInputValue, setOtpInputValue] = useState('');
  const [otpError, setOtpError] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}} textType="header">
          Verification
        </Text>
        <Spacer height={50} />
      </View>
      <View style={{paddingHorizontal: 16}}>
        <Text
          textType="bold"
          fontWeight="semiBold"
          style={{textAlign: 'center'}}
          fontColors={colors.black}>
          A verification code has been sent to your registered phone number.
          Please enter the number below
        </Text>
        <Spacer height={30} />
        <OTPField
          isError={otpError === '' ? false : true}
          otpValue={value => {
            setOtpInputValue(value);
          }}
          otpTotal={4}
        />
        <Spacer height={18} />
        <Text
          textType="bold"
          fontWeight="semiBold"
          style={{textAlign: 'center'}}
          fontColors={colors.black}>
          You haven't received the code ?
        </Text>
        <Spacer height={10} />
        <Text
          textType="bold"
          fontWeight="semiBold"
          style={{textAlign: 'center', textDecorationLine: 'underline'}}
          fontColors={colors.primary}>
          Send it again
        </Text>
        <Spacer height={30} />
        <Button
          title="Validate"
          fullWidth
          variant="secondary"
          onPress={() => navigation.navigate('OnBoardingScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, justifyContent: 'center'},
});

export default OTPScreen;
