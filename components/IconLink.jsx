import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useLinkProps, useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../constants/colors';

function IconLink({ to, action, icon, children, ...rest }) {
  const colors = useTheme().colors;
  const { onPress, ...props } = useLinkProps({ to, action });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.link,
        pressed && styles.pressed,
        { backgroundColor: colors.card },
      ]}
      onPress={onPress}
      {...props}
      {...rest}
      android_ripple={{ color: Colors.primary100 }}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={20} color={Colors.primary500} />
        </View>
        <Text style={[{ color: colors.text }]}>{children}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={Colors.primary500} />
    </Pressable>
  );
}

export default IconLink;

const styles = StyleSheet.create({
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 11,
    marginBottom: 2,
    marginTop: 1,
  },
  container: { flexDirection: 'row', gap: 17, alignItems: 'center' },
  iconContainer: {
    backgroundColor: Colors.primary50,
    width: 39,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: { fontFamily: 'PlusJakarta', fontSize: 12 },
  pressed: { opacity: Platform.select({ ios: 0.7 }) },
});
