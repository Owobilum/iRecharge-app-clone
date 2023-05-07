import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { setUserTheme, selectUserTheme } from '../redux/userSlice';
import { Colors } from '../constants/colors';

const themeOptions = ['dark', 'light', 'system'];

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const colors = useTheme().colors;
  const userTheme = useSelector(selectUserTheme);

  function pressHandler(theme) {
    dispatch(setUserTheme(theme));
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        borderRadius: 8,
        borderColor: Colors.gray500,
        borderWidth: 1,
      }}
    >
      {themeOptions.map((theme) => (
        <Pressable
          style={[
            styles.pressable,
            userTheme === undefined && theme === 'system' && styles.selected,
            userTheme === theme && styles.selected,
          ]}
          key={theme}
          onPress={pressHandler.bind(this, theme)}
        >
          <Text
            style={[
              styles.pressableText,
              { color: userTheme === theme ? colors.card : colors.text },
            ]}
          >
            {theme}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

export default ThemeSwitcher;

const styles = StyleSheet.create({
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    flex: 1,
  },
  pressableText: {
    fontFamily: 'PlusJakarta',
    textTransform: 'capitalize',
  },
  selected: {
    backgroundColor: Colors.primary500,
    borderRadius: 5,
  },
});
