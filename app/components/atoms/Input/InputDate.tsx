import {Calendar} from '@assets/icons';
import {getFormatDate} from '@helper/DateManipulation';
import {colors} from '@themes/colors';
import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Spacer} from '../Spacer';
import Text from '../Text/Text';

interface IInputDateProps {
  label: string;
}

export const InputDate: React.FC<IInputDateProps> = ({label}) => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <Pressable style={styles.container} onPress={() => setOpen(true)}>
      <View
        style={{
          backgroundColor: colors.white,
          position: 'absolute',
          top: -9,
          left: 12,
          paddingHorizontal: 4,
        }}>
        <Text textType="label">{label}</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Spacer width={16} />
        {date ? (
          <Text
            textType="normal"
            fontSize={18}
            fontLineHeight={22}
            fontColors={colors.black}>
            {getFormatDate(date)}
          </Text>
        ) : (
          <Text
            textType="normal"
            fontSize={18}
            fontLineHeight={22}
            fontColors={colors.Gray}>
            MM/DD/YYYY
          </Text>
        )}

        <View
          style={{
            flexGrow: 1,
            alignItems: 'flex-end',
            paddingRight: 13,
          }}>
          <Calendar color={colors.Gray} width={20} />
        </View>
      </View>

      <DatePicker
        modal
        open={open}
        date={date ? date : new Date()}
        mode="date"
        locale="en"
        onConfirm={selectedDate => {
          setOpen(oldVal => !oldVal);
          setDate(selectedDate);
        }}
        onCancel={() => {
          setOpen(oldVal => !oldVal);
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
});

export default InputDate;
