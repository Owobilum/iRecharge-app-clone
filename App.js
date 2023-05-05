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
} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/colors';
import { store, persistor } from './redux/store';

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

export default function App() {
  const scheme = useColorScheme();

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
      <StatusBar style="auto" />
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <NavigationContainer
            theme={scheme === 'dark' ? MyDarkTheme : MyTheme}
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
            </Stack.Navigator>
          </NavigationContainer>
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
