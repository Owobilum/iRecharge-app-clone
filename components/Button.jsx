import { StyleSheet, Text, Pressable, Platform } from 'react-native';

import { Colors } from '../constants/colors';

function Button({ buttonStyle, children, colorScheme, onPress, textStyle }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        pressed && styles.pressed,
      ]}
      android_ripple={{
        color:
          colorScheme === 'white'
            ? Colors.primary200
            : colorScheme === 'secondary'
            ? Colors.secondary900
            : Colors.primary800,
      }}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
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
    borderRadius: 5,
  },
  pressed: {
    opacity: Platform.OS === 'ios' ? 0.7 : 1,
  },
  text: {
    color: 'white',
    fontFamily: 'PlusJakarta',
  },
});
