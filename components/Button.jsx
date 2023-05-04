import { StyleSheet, Text, Pressable, Platform } from 'react-native';

import { Colors } from '../constants/colors';

function Button({ children, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      android_ripple={{ color: Colors.primary800 }}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: Colors.primary500,
    width: '100%',
  },
  pressed: {
    opacity: Platform.OS === 'ios' ? 0.7 : 1,
  },
  text: {
    color: 'white',
    fontFamily: 'PlusJakarta',
  },
});
