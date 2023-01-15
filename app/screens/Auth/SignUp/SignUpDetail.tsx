import {Button, Spacer, Text, InputText} from '@components/atoms';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ISignUpDetailProps {}

export const SignUpDetail: React.FC<ISignUpDetailProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{justifyContent: 'center', paddingTop: 16}}>
          <Text style={{textAlign: 'center'}} textType="header">
            {'Please Complete\nyour details'}
          </Text>
        </View>
        <Spacer height={16} />
        <View style={{paddingHorizontal: 16}}>
          <InputText label={'Family Name'} />
          <Spacer height={18} />
          <InputText label={'Name'} />
          <Spacer height={18} />
          <InputText label={'Are you a Woman'} />
          <Spacer height={18} />
          <InputText label={'Birthday'} />
          <Spacer height={18} />
          <InputText label={'My message to My S Life Community'} />
          <Spacer height={18} />
          <InputText label={'My interest'} />
          <Spacer height={18} />
          <InputText label={'What are you here for ?'} />
          <Spacer height={18} />
          <InputText
            label={'by clicking I agree to terms & conditions privacy policy'}
          />
          <Spacer height={18} />
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button title="Sign Up" fullWidth variant="secondary" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  buttonWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
});

export default SignUpDetail;
