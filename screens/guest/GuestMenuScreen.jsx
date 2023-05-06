import { View, FlatList } from 'react-native';

import IconLink from '../../components/IconLink';

const renderItem = ({ item: { screen, icon, text } }) => (
  <IconLink to={{ screen }} icon={icon}>
    {text}
  </IconLink>
);

function GuestMenuScreen() {
  return (
    <View>
      <FlatList
        data={linkData}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
      />
    </View>
  );
}

export default GuestMenuScreen;

const linkData = [
  { screen: 'GuestHome', icon: 'people', text: 'Referrals' },
  { screen: 'GuestHome', icon: 'ios-share-social', text: 'Share iRecharge' },
  { screen: 'GuestHome', icon: 'newspaper', text: 'Terms and Conditions' },
  { screen: 'GuestHome', icon: 'log-in', text: 'Login' },
  { screen: 'GuestHome', icon: 'log-in-sharp', text: 'Sign Up' },
  { screen: 'GuestHome', icon: 'heart', text: 'Rate the App' },
];
