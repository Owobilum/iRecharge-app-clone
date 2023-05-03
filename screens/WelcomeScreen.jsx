import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import IconButton from '../components/IconButton';
import { Colors } from '../constants/colors';

function WelcomeScreen() {
  function signUpHandler() {}

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/hero.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.heading}>Welcome to iRecharge</Text>
        <Text style={styles.bodyText}>Convenience and Accessibility</Text>
        <View style={styles.buttonContainer}>
          {userOptions.map(({ icon, name }) => (
            <IconButton
              key={name}
              icon={icon}
              iconProps={{ size: 18 }}
              style={{ width: '48%', height: 64 }}
            >
              {name}
            </IconButton>
          ))}
        </View>
        <Text style={styles.cta}>
          Don't have an account?{' '}
          <Text style={styles.highlight} onPress={signUpHandler}>
            Create one
          </Text>
        </Text>
      </View>
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
    gap: 8,
    marginTop: 45,
  },
  cta: {
    marginTop: 42,
    fontFamily: 'PlusJakarta',
    fontSize: 12,
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