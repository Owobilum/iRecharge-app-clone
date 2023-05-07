import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { Colors } from '../../constants/colors';
import { selectUserPhone } from '../../redux/userSlice';
import IconLink from '../../components/IconLink';
import ThemeSwitcher from '../../components/ThemeSwitcher';

function GuestAccountScreen() {
  const colors = useTheme().colors;
  const userPhone = useSelector(selectUserPhone);

  return (
    <ScrollView>
      <LinearGradient
        colors={[Colors.primary500, Colors.primary200]}
        style={styles.profileContainer}
      >
        <View style={[styles.iconContainer, { backgroundColor: colors.card }]}>
          <Ionicons name="person" color={Colors.primary500} size={50} />
        </View>
        <Text style={[styles.text, { color: colors.card }]}>{userPhone}</Text>
      </LinearGradient>
      <View style={[styles.sunnyBox, { backgroundColor: colors.card }]}>
        <View style={styles.iconContainer2}>
          <Ionicons name="sunny" color={colors.primary} size={20} />
        </View>
        <Text style={[styles.text2, { color: colors.text }]}>Appearance</Text>
      </View>
      <View style={{ padding: 16, backgroundColor: colors.card }}>
        <ThemeSwitcher />
      </View>
      <IconLink to={{ screen: 'GuestHome' }} icon="log-in">
        Create Account
      </IconLink>
      <View style={styles.textBox}>
        <Text style={[styles.text3, { color: colors.text }]}>
          Why you should say yes...
        </Text>
      </View>
      <View style={styles.reasons}>
        {reasonsData.map((reason) => (
          <View
            key={reason}
            style={[styles.reasonTextBox, { backgroundColor: colors.card }]}
          >
            <Text style={[styles.text2, { color: colors.text }]}>{reason}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    height: 302,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PlusJakarta-700',
    fontSize: 16,
    marginVertical: 8,
  },
  sunnyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
  },
  iconContainer2: {
    height: 39,
    width: 39,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary50,
    borderRadius: 5,
  },
  text2: { fontSize: 12, fontFamily: 'PlusJakarta-100' },
  text3: {
    fontFamily: 'PlusJakarta-700',
    fontSize: 13,
  },
  textBox: {
    alignItems: 'center',
    padding: 16,
  },
  reasons: { paddingHorizontal: 16 },
  reasonTextBox: {
    paddingVertical: 19,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 3,
  },
});

export default GuestAccountScreen;

const reasonsData = [
  'No convenience fee on your first 10 Transactions',
  'Refer friends and family and earn instant Cash',
  'Get updates and have access to promos and discounts',
  'Access your transaction history and schedule reminders',
];
