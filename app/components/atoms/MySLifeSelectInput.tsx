import HatIcon from '@assets/icons/HatIcon';
import PeopleIcon from '@assets/icons/PeopleIcon';
import {colors} from '@themes/colors';
import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import {Spacer} from './Spacer';
import Text from './Text/Text';

interface IMySLifeSelectInputProps {}

export const MySLifeSelectInput: React.FC<IMySLifeSelectInputProps> = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <View>
      <Text textType="label"> What are you here for ?</Text>
      <Spacer height={31} />
      <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
        <Pressable
          style={{alignItems: 'center'}}
          onPress={() => setSelected(0)}>
          <HatIcon color={selected === 0 ? selectedColors : colors.Gray} />
          <Spacer height={10} />
          <Text
            textType="label"
            fontColors={selected === 0 ? selectedColors : colors.black}>
            I am here to learn
          </Text>
        </Pressable>
        <Pressable
          style={{alignItems: 'center'}}
          onPress={() => setSelected(1)}>
          <PeopleIcon color={selected === 1 ? selectedColors : colors.Gray} />
          <Spacer height={10} />
          <Text
            textType="label"
            style={{textAlign: 'center'}}
            fontColors={selected === 1 ? selectedColors : colors.black}>
            {'I am here to make\nnew friends'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const selectedColors = '#754845';

export default MySLifeSelectInput;
