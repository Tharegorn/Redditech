import {StylesContext} from '@material-ui/styles';
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/reddit-logo-text-white.png')}
      />
      <View>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../assets/icon-notification.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    paddingBottom: 20,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
export default Header;
