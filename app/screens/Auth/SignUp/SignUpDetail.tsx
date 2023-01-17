import {
  Button,
  Spacer,
  Text,
  InputText,
  InputSelectBox,
  InputSelectOptions,
  InputCheckBox,
  InputMultiSelect,
} from '@components/atoms';
import InputDate from '@components/atoms/Input/InputDate';
import MySLifeSelectInput from '@components/atoms/MySLifeSelectInput';
import {colors} from '@themes/colors';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ISignUpDetailProps {}

export const SignUpDetail: React.FC<ISignUpDetailProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{justifyContent: 'center', paddingTop: 32}}>
          <Text style={{textAlign: 'center'}} textType="header">
            {'Please Complete\nyour details'}
          </Text>
        </View>
        <Spacer height={65} />
        <View style={{paddingHorizontal: 16}}>
          <InputText label={'Family Name'} />
          <Spacer height={18} />
          <InputText label={'Name'} />
          <Spacer height={18} />
          <InputSelectBox
            label="Are You a Woman"
            options={genderOptions}
            defaultValue={1}
          />
          <Spacer height={20} />
          <InputDate label="Birthday" />
          <Spacer height={18} />
          <InputSelectBox
            label="My message to My S Life Community"
            options={messageOptions}
            defaultValue={1}
            orientation="vertical"
          />
          <InputMultiSelect label="My Interest" />
          <Spacer height={18} />
          <MySLifeSelectInput />
          <Spacer height={31} />
          <InputCheckBox
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

const genderOptions: InputSelectOptions = [
  {
    name: 'Yes',
    value: 1,
  },
  {
    name: 'No',
    value: 2,
  },
  {
    name: 'Not defined by a genre',
    value: 0,
  },
];

const messageOptions: InputSelectOptions = [
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    value: 1,
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    value: 2,
  },
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    value: 0,
  },
];
