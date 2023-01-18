import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DummyPage} from '@navigators/AppNavigator';
import {colors} from '@themes/colors';
import {
  AddIcon,
  BubbleChatIcon,
  HomeIcon,
  LocationIcon,
  StarIcon,
} from '@assets/icons';

const Tab = createBottomTabNavigator();

interface IHomeProps {}

export const Home: React.FC<IHomeProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{tabBarIcon: ({color}) => <HomeIcon color={color} />}}
        name="Feed"
        component={DummyPage}
      />
      <Tab.Screen
        options={{tabBarIcon: ({color}) => <LocationIcon color={color} />}}
        name="Location"
        component={DummyPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <AddIcon color={colors.secondary} />,
        }}
        name="GaleryPost"
        component={DummyPage}
      />
      <Tab.Screen
        options={{tabBarIcon: ({color}) => <StarIcon color={color} />}}
        name="Favorite"
        component={DummyPage}
      />
      <Tab.Screen
        options={{tabBarIcon: ({color}) => <BubbleChatIcon color={color} />}}
        name="Chat"
        component={DummyPage}
      />
    </Tab.Navigator>
  );
};

export default Home;
