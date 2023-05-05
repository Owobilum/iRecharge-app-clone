import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Colors } from '../constants/colors';

function IconButton({ children, icon, iconProps, onPress, style }) {
  const colors = useTheme().colors;
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      style={[
        styles.buttonContainer,
        { shadowColor: colors.text, backgroundColor: colors.card },
        style,
      ]}
    >
      <Pressable
        android_ripple={{ color: Colors.primary500 }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.card },
          pressed && styles.pressed,
        ]}
        onPress={onPress}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <FontAwesome5
          name={icon}
          color={isPressed ? 'white' : colors.text}
          {...iconProps}
        />
        <Text
          style={[
            styles.text,
            { color: colors.text },
            isPressed && styles.textPressed,
          ]}
        >
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
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
  button: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  textPressed: {
    color: 'white',
  },
});
