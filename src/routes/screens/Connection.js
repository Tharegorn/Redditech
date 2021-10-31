import React from 'react';
import {Text, Button, Image, View, StyleSheet, Linking} from 'react-native';
import {useAuth} from '../utils/useauth';

const Connect = () => {
  const auth = useAuth();

  return (
    <View style={{backgroundColor: '#101111', flex: 1}}>
      <Image
        style={styles.background}
        source={require('../assets/FrameOrange.png')}
      />
      <Image
        style={styles.logo}
        source={require('../assets/connect-logo.png')}
      />
      <View style={{padding: 25}}>
        <Text style={styles.title}>Connect an account</Text>
      </View>
      <View style={{paddingBottom: 26, marginHorizontal: 11}}>
        <Text style={styles.body}>By continuing, you agree to our</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={styles.body}
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.redditinc.com/policies/user-agreement-september-12-2021',
              )
            }>
            User Agreement
          </Text>
          <Text style={styles.body}> and </Text>
          <Text
            style={styles.body}
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.redditinc.com/policies/privacy-policy-september-12-2021',
              )
            }>
            Privacy Policy
          </Text>
          <Text style={styles.body}>.</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          color="rgba(255, 255, 255, 0.00)"
          title="Continue with Reddit"
          onPress={() => {
            auth.Authenticate();
          }}></Button>
      </View>
      <View style={{position: 'absolute', bottom: 25, alignSelf: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.body}>Not already a Redditor ? </Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.reddit.com/register/')}>
            Create an account
          </Text>
          <Text style={styles.body}>.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    height: 200,
    width: '100%',
    zIndex: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Gotham-Bold',
    textAlign: 'center',
  },
  body: {
    color: '#FFF',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Gotham-Medium',
    textAlign: 'center',
    opacity: 0.8,
  },
  logo: {
    marginBottom: 30,
    marginTop: 100,
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
  },
  link: {
    color: '#FF6B34',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Gotham-Medium',
    textAlign: 'center',
    opacity: 0.8,
    textDecorationLine: 'underline',
  },
});
export default Connect;
