import { useCallback } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

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
      <StatusBar style="auto" />
      <NavigationContainer>
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
    width: 95.75,
    height: 20.16,
  },
});
