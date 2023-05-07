import { StyleSheet, View, FlatList } from 'react-native';

import IconLink from '../../components/IconLink';

const renderItem = ({ item: { screen, icon, text } }) => (
  <IconLink to={{ screen }} icon={icon}>
    {text}
  </IconLink>
);

function GuestSupportScreen() {
  return (
    <View>
      <IconLink
        to={{ screen: 'GuestHome' }}
        icon="alert-circle"
        noIconContainer
      >
        What's new in this version?
      </IconLink>
      <FlatList
        data={linkData}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default GuestSupportScreen;

const linkData = [
  { screen: 'GuestHome', icon: 'chatbox-ellipses', text: 'FAQ' },
  { screen: 'GuestHome', icon: 'mail', text: 'Send us a Mail' },
  { screen: 'GuestHome', icon: 'phone-portrait', text: 'Call Us' },
  {
    screen: 'GuestHome',
    icon: 'logo-whatsapp',
    text: 'Send us a message on WhatsApp',
  },
];
