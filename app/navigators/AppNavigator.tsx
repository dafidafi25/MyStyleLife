/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React, {Fragment, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  getActiveRouteName,
  navigationRef,
  useBackButtonHandler,
} from './NavigationUtilities';
import {StatusBar, View} from 'react-native';
import Welcome from '@screens/Welcome/Welcome';
import SignIn from '@screens/Auth/SignIn/SignIn';
import SignUp from '@screens/Auth/SignUp/SignUp';
import ForgotPassword from '@screens/Auth/ForgotPassword/ForgotPassword';
import SignUpDetail from '@screens/Auth/SignUp/SignUpDetail';
import OTPScreen from '@screens/Auth/OTP/OTPScreen';
import OnBoarding from '@screens/OnBoarding/OnBoarding';
import Home from '@screens/Home/Home';
import OnBoardingSignIn from '@screens/OnBoarding/OnBoardingSignIn';
import {colors} from '@themes/colors';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`
 */
export type NavigatorParamList = {
  // Unauthenticated Screen
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SignUpDetailScreen: undefined;
  ForgotPasswordScreen: undefined;

  OTPScreen: undefined;
  OnBoardingScreen: undefined;
  OnBoardingScreenSignin: undefined;

  // Authenticated Screen
  Home: undefined;

  GaleryPost: undefined;
  Feed: undefined;
};

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  const NotAuthenticatedRoute = (
    <Fragment>
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="LoginScreen" component={SignIn} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
      <Stack.Screen name="SignUpDetailScreen" component={SignUpDetail} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoarding} />
      <Stack.Screen
        name="OnBoardingScreenSignin"
        component={OnBoardingSignIn}
      />
      <Stack.Screen name="Home" component={Home} />
    </Fragment>
  );
  //   const AuthenticatedRoute = <Fragment></Fragment>;

  function getCurrentRoutes() {
    /**
     * TODO Create Redux Store to return which screen is Authenticated or not
     * For Now Only Return Not Authenticated Route
     *  */
    return NotAuthenticatedRoute;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}
      initialRouteName="Home">
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  /**
   * To listen into current route screen so in here
   * we can change status bar based on screen name
   */
  const [currentRoute, setCurrentRoute] = React.useState('');
  useBackButtonHandler(canExit);
  console.log(currentRoute);

  // Get current route name every time it changes
  useEffect(() => {
    // Get current route name, and set it to state
    setCurrentRoute(getActiveRouteName(navigationRef.getRootState()));
    // Check every time the route changes

    const unsubscribe = navigationRef.current?.addListener('state', e => {
      const routeName = e.data.state.routes[e.data.state.index].name;
      setCurrentRoute(routeName);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      {...props} // Add this to persist screen on DEVre
    >
      <StatusBar
        backgroundColor={
          currentRoute === 'OnBoardingScreenSignin' ||
          currentRoute === 'OnBoardingScreen'
            ? colors.pink1
            : 'white'
        }
        barStyle={'dark-content'}
      />

      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

export function DummyPage() {
  return <View />;
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['WelcomeScreen'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
