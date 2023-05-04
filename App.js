import { useCallback } from 'react';
import { View, Image, StyleSheet, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/colors';

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
      <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : MyTheme}>
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
