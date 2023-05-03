import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native';

import { Colors } from '../constants/colors';

function IconButton({ children, icon, iconProps, onPress, style }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        android_ripple={{ color: Colors.primary500 }}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <FontAwesome5
          name={icon}
          color={isPressed ? 'white' : 'black'}
          {...iconProps}
        />
        <Text style={[styles.text, isPressed && styles.textPressed]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 24,
    width: '100%',
    height: '100%',
  },
  pressed: {
    backgroundColor: Platform.OS === 'ios' && Colors.primary500,
    color: 'white',
  },
  text: {
    fontFamily: 'PlusJakarta',
    fontSize: 12,
    color: 'black',
  },
  textPressed: {
    color: 'white',
  },
});
