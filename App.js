import { useCallback } from 'react';
import { View, Image, StyleSheet, useColorScheme, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/colors';
import { store, persistor } from './redux/store';
import GuestHomeScreen from './screens/guest/GuestHomeScreen';
import GuestMenuScreen from './screens/guest/GuestMenuScreen';
import GuestAccountScreen from './screens/guest/GuestAccountScreen';
import GuestSupportScreen from './screens/guest/GuestSupportScreen';
import { selectUserTheme } from './redux/userSlice';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary500,
  },
};
const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.primary500,
  },
};

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

function GuestScreens() {
  const colors = useTheme().colors;
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: '',
      }}
    >
      <Tab.Screen
        name="GuestHome"
        component={GuestHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerLeft: () => (
            <Image
              source={require('./assets/images/logo.png')}
              style={[styles.logo, { marginLeft: 16 }]}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color={colors.text}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GuestMenu"
        component={GuestMenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
          headerTitle: 'Menu',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="GuestSupport"
        component={GuestSupportScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="headset" size={size} color={color} />
          ),
          headerTitle: 'Support',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="GuestAccount"
        component={GuestAccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  const scheme = useColorScheme();
  const userTheme = useSelector(selectUserTheme);
  return (
    <NavigationContainer
      theme={
        userTheme === 'dark'
          ? MyDarkTheme
          : userTheme === 'light'
          ? MyTheme
          : scheme === 'dark'
          ? MyDarkTheme
          : MyTheme
      }
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerTitle: () => (
              <Image
                source={require('./assets/images/logo.png')}
                style={styles.logo}
              />
            ),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Guest"
          component={GuestScreens}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CustomStatusBar() {
  const userTheme = useSelector(selectUserTheme);

  return (
    <StatusBar
      style={
        userTheme === 'dark' ? 'light' : userTheme === 'light' ? 'dark' : 'auto'
      }
    />
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'PlusJakarta-100': require('./assets/fonts/PlusJakartaText-Light.otf'),
    PlusJakarta: require('./assets/fonts/PlusJakartaText-Regular.otf'),
    'PlusJakarta-500': require('./assets/fonts/PlusJakartaDisplay-Medium.otf'),
    'PlusJakarta-700': require('./assets/fonts/PlusJakartaText-Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <CustomStatusBar />
          <Navigation />
        </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo: {
    width: 96,
    height: 20,
  },
});
