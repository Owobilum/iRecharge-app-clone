import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

import { Colors } from '../../constants/colors';
import CustomButton from '../../components/Button';
import { selectUserPhone } from '../../redux/userSlice';
import Carousel from '../../components/Carousel';

function ServiceCard({ icon, label, onPress }) {
  const colors = useTheme().colors;

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: colors.card,
          width: 84,
          height: 94,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 2,
          padding: 4,
          opacity: Platform.select({ ios: pressed ? 0.7 : 1, android: 1 }),
        },
      ]}
      onPress={onPress}
      android_ripple={{ color: Colors.primary100 }}
    >
      <View
        style={{
          height: 38,
          width: 38,
          borderRadius: 9999,
          backgroundColor: Colors.primary50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Ionicons name={icon} size={20} color={Colors.primary500} />
      </View>
      <Text
        style={[
          {
            color: colors.text,
            fontFamily: 'PlusJakarta',
            fontSize: 12,
            marginTop: 4,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function GuestHomeScreen() {
  const userPhone = useSelector(selectUserPhone);
  const colors = useTheme().colors;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.greeting, { color: colors.text }]}>Hello!</Text>
        <View style={styles.userInfoContainer}>
          <Text style={[styles.phone, { color: colors.text }]}>
            {userPhone}
          </Text>
          <View style={styles.userType}>
            <Text style={styles.userTypeText}>Guest</Text>
          </View>
        </View>
        <View style={styles.signUpCard}>
          <Text style={styles.cardHeader}>Create an Account</Text>
          <Text style={styles.cardBody}>
            To enjoy no convenience fee on your next 10 transactions
          </Text>
          <CustomButton
            colorScheme="white"
            buttonStyle={styles.signUpButton}
            textStyle={styles.signUpButtonText}
          >
            SIGN UP
          </CustomButton>
        </View>
        <Text style={[styles.servicesSectionHead, { color: colors.text }]}>
          My Services
        </Text>
        <View style={styles.servicesContainer}>
          {servicesData.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </View>
        <View
          style={[styles.getAccountContainer, { backgroundColor: colors.card }]}
        >
          <View style={styles.copyContainer}>
            <Text style={[styles.copy, { color: colors.text }]}>
              Your Electricity Meter and TV Decoder now have a unique account
              number
            </Text>
          </View>

          <View style={styles.getAccountCtaBox}>
            <Text style={[styles.getAccountHead, { color: colors.text }]}>
              Get My Utility Account
            </Text>
            <CustomButton
              colorScheme="secondary"
              buttonStyle={styles.getAccountButton}
            >
              Get account
            </CustomButton>
          </View>
          <Link to={{ screen: 'Welcome' }} style={styles.read}>
            Read more
          </Link>
        </View>
        <View>
          <Carousel data={carouselData} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  greeting: { fontFamily: 'PlusJakarta', fontSize: 12 },
  userInfoContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  signUpCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
    marginVertical: 15,
  },
  cardHeader: { color: 'white', fontSize: 18, fontFamily: 'PlusJakarta-700' },
  cardBody: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 8,
    fontFamily: 'PlusJakarta',
    fontSize: 11,
  },
  phone: { fontFamily: 'PlusJakarta-700', fontSize: 16 },
  userType: {
    fontFamily: 'PlusJakarta',
    fontSize: 11,
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: Colors.primary500,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  userTypeText: {
    color: 'white',
  },
  signUpButton: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    borderRadius: 3,
  },
  signUpButtonText: {
    color: Colors.primary500,
    fontSize: 12,
  },
  servicesSectionHead: {
    marginTop: 5,
    marginBottom: 10,
    fontFamily: 'PlusJakarta-700',
    fontSize: 13,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    columnGap: 4,
    rowGap: 8,
  },
  getAccountContainer: {
    marginTop: 17,
    marginBottom: 25,
    padding: 8,
    borderRadius: 5,
  },
  copyContainer: {
    borderLeftWidth: 2,
    borderLeftColor: Colors.primary500,
    paddingLeft: 8,
    marginBottom: 18,
  },
  copy: {
    fontSize: 10,
    fontFamily: 'PlusJakarta',
    maxWidth: 266,
  },
  getAccountCtaBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  getAccountHead: { fontSize: 12, fontFamily: 'PlusJakarta-500' },
  getAccountButton: {
    backgroundColor: Colors.secondary800,
    width: 100,
    height: 36,
  },
  read: {
    fontFamily: 'PlusJakarta',
    marginTop: 18,
    color: Colors.primary500,
    fontSize: 11,
  },
});

export default GuestHomeScreen;

const servicesData = [
  { label: 'Electricity', icon: 'bulb', route: '' },
  { label: 'Airtime', icon: 'phone-portrait', route: '' },
  { label: 'Data', icon: 'wifi', route: '' },
  { label: 'Cable TV', icon: 'tv', route: '' },
  { label: 'Referrals', icon: 'people', route: '' },
  { label: 'Sports Betting', icon: 'basketball', route: '' },
  { label: 'Insurance', icon: 'shield-checkmark', route: '' },
  { label: 'Jamb & Waec', icon: 'book', route: '' },
];

const carouselData = [
  {
    title: 'Beautiful and dramatic Zuma Valley',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, Wuse 2',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
];
