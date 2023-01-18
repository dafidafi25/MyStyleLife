import React, {Component} from 'react';

import {Input} from '@rneui/themed';
import {TextInput, View} from 'react-native';
import {type} from '@themes/font';
import {colors} from '@themes/colors';

type OTPFieldProps = {
  otpTotal: number;
  isError: boolean;
  otpValue: (value: string) => void;
};

type OTPFieldState = {
  otp: string[];
};

class OTPField extends Component<OTPFieldProps, OTPFieldState> {
  state: OTPFieldState = {
    otp: [],
  };
  otpTextInput: TextInput[] = [];

  focusField(index: number) {
    if (index < this.props.otpTotal) {
      (this.otpTextInput[index] as TextInput).focus();
      this.setState({});
    }
  }

  focusPrevious(key: string, index: number) {
    if (key === 'Backspace' && index !== 0)
      this.otpTextInput[index - 1].focus();
  }

  focusNext(index: number, value: string) {
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1].focus();
    }
    if (index === this.otpTextInput.length - 1) {
      this.otpTextInput[index].blur();
    }

    this.state.otp[index] = value.slice(-1);
    this.setState({
      otp: this.state.otp,
    });
    this.otpTextInput[index].setNativeProps({text: value.slice(-1)});
    this.props.otpValue(this.state.otp.join(''));
    if (value.slice(-1) == '0') {
      // Cant give input 0
      // this.clearInputs()
    }
  }
  clearInputs() {
    this.otpTextInput.forEach(textField => textField.clear());
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingRight: 15,
        }}>
        {Array.from(Array(4)).map((value, index) => {
          return (
            <Input
              ref={ref => (this.otpTextInput[index] = ref!)}
              key={index}
              containerStyle={{height: 45, width: 45}}
              inputContainerStyle={{
                backgroundColor: colors.gray5,
                borderColor: this.props.isError ? colors.secondary : 'none',
                borderRadius: 5,
                height: 45,
                width: 45,
                borderBottomWidth: 0,
              }}
              keyboardType="numeric"
              onChangeText={v => this.focusNext(index, v)}
              onKeyPress={e => this.focusPrevious(e.nativeEvent.key, index)}
              inputStyle={{
                textAlign: 'center',
                color: this.props.isError ? colors.secondary : colors.black,
                fontSize: 24,
                fontFamily: type.TTCommonsBold,
                lineHeight: 26,
                top: 2,
              }}
            />
          );
        })}
      </View>
    );
  }
}
export {OTPField};
