import { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  useWindowDimensions,
  Platform,
  Pressable,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../Input';
import CustomButton from '../Button';
import { Colors } from '../../constants/colors';
import { selectUserPhone, setUserPhone } from '../../redux/userSlice';

function PhoneNumberModal({ visible, onDismiss }) {
  const colors = useTheme().colors;
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const [isPressed, setIsPressed] = useState(false);
  const phoneNumber = useSelector(selectUserPhone);
  const [phone, setPhone] = useState(phoneNumber);

  let containerStyle = { height: '50%' };
  if (width < 380) {
    containerStyle = { height: '65%' };
  }

  function submitHandler() {
    dispatch(setUserPhone(phone));
  }

  function createAccountHandler() {}

  function inputHandler(text) {
    setPhone(text);
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      //   onRequestClose={onDismiss}
    >
      <Pressable
        style={styles.backdropContainer}
        onPress={onDismiss}
      ></Pressable>
      <View
        style={[
          styles.container,
          containerStyle,
          { backgroundColor: colors.card },
        ]}
      >
        <Text style={[styles.heading, { color: colors.text }]}>
          Enter Phone Number
        </Text>
        <Text style={[styles.subText, { color: colors.text }]}>
          We're asking for your phone number so we can send you an SMS receipt
          when your transaction is completed
        </Text>
        <Input label="Phone number" onChangeText={inputHandler} value={phone} />
        <CustomButton style={styles.button} onPress={submitHandler}>
          Continue
        </CustomButton>
        <Text
          style={[styles.cta, isPressed && styles.ctaPressed]}
          onPress={createAccountHandler}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          Create An Account
        </Text>
      </View>
    </Modal>
  );
}

export default PhoneNumberModal;

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    justifyContent: 'center',
    padding: 16,
  },
  backdropContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  heading: { fontFamily: 'PlusJakarta-500', fontSize: 18 },
  subText: {
    fontFamily: 'PlusJakarta',
    fontSize: 11,
    marginTop: 4,
    marginBottom: 30,
  },
  button: {
    marginTop: 37,
  },
  cta: {
    color: Colors.primary500,
    fontFamily: 'PlusJakarta',
    fontSize: 12,
    textAlign: 'right',
    marginVertical: 17,
  },
  ctaPressed: {
    textDecorationLine: Platform.OS === 'android' ? 'underline' : 'none',
    textDecorationColor: Colors.primary500,
  },
});
