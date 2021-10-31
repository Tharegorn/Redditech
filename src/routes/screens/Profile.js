import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {useAuth} from '../utils/useauth';

const Profile = () => {
  const auth = useAuth();
  useEffect(() => {
    auth.Profile();
  }, []);
  return (
    <View style={{backgroundColor: '#101111', flex: 1}}>
      {auth.profile.profile_banner ? (
        <View style={styles.banner}>
          <Image
            source={{uri: auth.profile.profile_banner}}
            style={{width: '100%', height: 300}}
          />
        </View>
      ) : (
        <></>
      )}
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: 0,
          height: 400,
          right: 0,
        }}
        source={require('../assets/FrameProfileOrange.png')}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.nameStyle}>{auth.profile.prefix}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('../assets/settings.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      {auth.profile.profile_pic ? (
        <View style={styles.avatarPosition}>
          <Image
            source={{uri: auth.profile.profile_pic}}
            style={styles.avatar}
          />
        </View>
      ) : (
        <></>
      )}
      <Text style={styles.nameStyle2}>{auth.profile.name}</Text>
      <Text style={styles.nameURL}>{auth.profile.url}</Text>
      <Text
        style={{
          fontFamily: 'GothamBook',
          color: '#F0FAFF',
          textAlign: 'center',
          paddingTop: 10,
          marginHorizontal: 30,
          marginTop: 10,
          lineHeight: 20,
        }}>
        {auth.profile.desc}
      </Text>
      <View style={styles.containerInfos}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Gotham-Bold',
              fontSize: 20,
              lineHeight: 30,
            }}>
            {auth.profile.karma}
          </Text>
          <Text
            style={{color: 'white', fontFamily: 'Gotham-Thin', fontSize: 18}}>
            karma
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Gotham-Bold',
              fontSize: 20,
              lineHeight: 30,
            }}>
            {' '}
            ?{' '}
          </Text>
          <Text
            style={{color: 'white', fontFamily: 'Gotham-Thin', fontSize: 18}}>
            comments
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Gotham-Bold',
              fontSize: 20,
              lineHeight: 30,
            }}>
            {auth.profile.coins}
          </Text>
          <Text
            style={{color: 'white', fontFamily: 'Gotham-Thin', fontSize: 18}}>
            coins{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    fontFamily: 'Gotham-Bold',
    fontSize: 20,
    color: '#F0FAFF',
    textAlign: 'center',
  },
  nameStyle2: {
    fontFamily: 'Gotham-Bold',
    fontSize: 20,
    color: '#F0FAFF',
    textAlign: 'center',
    paddingTop: 15,
  },
  nameURL: {
    fontFamily: 'Gotham-Thin',
    fontSize: 18,
    color: '#F0FAFF',
    textAlign: 'center',
    paddingTop: 10,
  },
  banner: {
    position: 'absolute',
    height: 200,
    width: '100%',
    zIndex: 0,
  },
  avatarPosition: {
    paddingTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 145,
    width: 145,
    borderRadius: 300,
    borderWidth: 6,
    borderColor: '#101111',
  },
  icon: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 40,
    paddingBottom: 20,
  },
  containerInfos: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 40,
    paddingBottom: 20,
  },
});

export default Profile;
