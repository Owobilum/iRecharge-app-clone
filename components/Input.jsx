import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Colors } from '../constants/colors';

function Input({ label, onChangeText, placeholder, value }) {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder ?? ''}
        style={[styles.input]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {},
  label: { marginVertical: 8, fontFamily: 'PlusJakarta', fontSize: 12 },
  input: {
    backgroundColor: Colors.gray300,
    height: 45,
    paddingHorizontal: 16,
  },
});
