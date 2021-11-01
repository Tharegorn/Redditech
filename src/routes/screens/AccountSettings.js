import React, {useEffect} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useAuth} from '../utils/useauth';
import {Switch} from 'react-native-elements';
import countries from './country';

const Settings = () => {
  const auth = useAuth();
  function modify(data) {
    fetch('https://oauth.reddit.com/api/v1/me/prefs', {
      method: 'PATCH',
      headers: {
        Authorization: 'bearer ' + auth.token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      auth.Prefs();
    });
  }
  useEffect(() => {
    auth.Prefs();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('../assets/frameSettings.png')}
        />
        <View style={styles.header}>
          <Text style={styles.mention}>Settings</Text>
        </View>
        <View style={styles.padder}>
          <Text style={styles.title}>Change Profile settings</Text>

          <View style={styles.containerCard}>
            <View style={styles.innerPadder}>
              <Text style={styles.textToSet}>
                Over 18:{' '}
                <Switch
                  value={auth.prefs.over_18}
                  onValueChange={e => {
                    modify({over_18: e});
                  }}
                />
              </Text>
              <Text style={styles.textToSet}>
                AutoPlay:{' '}
                <Switch
                  value={auth.prefs.autoplay}
                  onValueChange={e => {
                    modify({video_autoplay: e});
                  }}
                />
              </Text>
              <View>
                <Text style={styles.textToSet}>
                  flexDirection: 'column' :) Beta:{' '}
                  <Switch
                    value={auth.prefs.beta}
                    onValueChange={e => {
                      modify({beta: e});
                    }}
                  />
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.padder}>
          <Text style={styles.title}>Privacy</Text>

          <View style={styles.containerCard}>
            <View style={styles.innerPadder}>
              <Text style={styles.textToSet}>
                Show presence :{' '}
                <Switch
                  value={auth.prefs.presence}
                  onValueChange={e => {
                    modify({show_presence: e});
                  }}
                />
              </Text>
              <Text style={styles.textToSet}>
                Email Private Message:{' '}
                <Switch
                  value={auth.prefs.e_p_message}
                  onValueChange={e => {
                    modify({email_private_message: e});
                  }}
                />
              </Text>
              <View style={{paddingBottom: 5}}>
                <Text style={styles.textToSet}>
                  Country Code: {auth.prefs.lang}
                </Text>
              </View>
              <View style={{height: 30}}>
                <ScrollView>
                  {countries.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => modify({country_code: item.code})}
                      key={index}>
                      <View style={{marginBottom: 4}}>
                        <Text style={styles.textToSet}>{item.code}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101111',
    flex: 1,
  },
  header: {
    paddingHorizontal: 15,
    marginTop: 60,
    marginBottom: 40,
  },
  mention: {
    fontFamily: 'Gotham-Bold',
    fontSize: 35,
    color: '#FFF',
  },
  background: {
    position: 'absolute',
    height: 130,
    width: '100%',
    zIndex: 0,
    left: 0,
    right: 0,
  },
  textToSet: {
    fontFamily: 'GothamBook',
    fontSize: 16,
    color: '#FFF',
    paddingTop: 8,
  },
  title: {
    fontFamily: 'Gotham-Bold',
    fontSize: 18,
    color: '#FFF',
    paddingLeft: 2,
  },
  containerCard: {
    height: 160,
    borderRadius: 6,
    borderRadius: 6,
    borderWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    marginTop: 15,
  },
  padder: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  innerPadder: {
    padding: 10,
  },
});
export default Settings;
