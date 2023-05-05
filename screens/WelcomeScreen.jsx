import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import IconButton from '../components/IconButton';
import { Colors } from '../constants/colors';
import PhoneNumberModal from '../components/modals/PhoneNumberModal';

function WelcomeScreen() {
  const colors = useTheme().colors;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  function closeModalHandler() {
    setIsModalVisible(false);
  }

  function openModalHandler() {
    setIsModalVisible(true);
  }

  function signUpHandler() {}

  function actionHandler(actionName) {
    if (actionName === 'Pay bills as a guest') {
      openModalHandler();
      return;
    }
  }

  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Image
          source={require('../assets/images/hero.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={[styles.heading, { color: colors.text }]}>
          Welcome to iRecharge
        </Text>
        <Text style={[styles.bodyText, { color: colors.text }]}>
          Convenience and Accessibility
        </Text>
        <View style={styles.buttonContainer}>
          {userOptions.map(({ icon, name }) => (
            <IconButton
              key={name}
              icon={icon}
              iconProps={{ size: 18 }}
              style={{ width: '48%', height: 64 }}
              onPress={actionHandler.bind(this, name)}
            >
              {name}
            </IconButton>
          ))}
        </View>
        <Text style={[styles.cta, { color: colors.text }]}>
          Don't have an account?{' '}
          <Text
            style={[styles.highlight, isPressed && styles.ctaPressed]}
            onPress={signUpHandler}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
          >
            Create one
          </Text>
        </Text>
      </View>
      <PhoneNumberModal
        visible={isModalVisible}
        onDismiss={closeModalHandler}
      />
    </ScrollView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 250,
    marginBottom: 42,
  },
  heading: {
    fontFamily: 'PlusJakarta-700',
    fontSize: 20,
    marginBottom: 7,
  },
  bodyText: {
    fontFamily: 'PlusJakarta',
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 11,
    marginTop: 45,
  },
  cta: {
    marginTop: 42,
    fontFamily: 'PlusJakarta',
    fontSize: 12,
  },
  ctaPressed: {
    color: Platform.OS === 'android' ? Colors.primary800 : Colors.primary500,
  },
  highlight: {
    color: Colors.primary500,
    textDecorationColor: Colors.primary500,
    textDecorationLine: 'underline',
  },
});

const userOptions = [
  {
    name: 'Pay bills as a guest',
    icon: 'user-alt',
  },
  { name: 'Login to my user account', icon: 'user-check' },
  { name: 'Login as a merchant', icon: 'user-shield' },
  { name: 'Login to my corporate account', icon: 'building' },
];
