import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {useAuth} from '../utils/useauth';

const Profile = () => {
  const auth = useAuth();
  useEffect(() => {
    auth.Profile();
  }, []);
  return (
    <View style={{backgroundColor: '#101111', flex: 1}}>
      <Image style={styles.banner} source={require('../assets/pattern.jpg')} />
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
      <Text style={{color: 'white'}}>Name : {auth.profile.name}</Text>
      <Text style={{color: 'white'}}>Desc : {auth.profile.desc}</Text>
      <Text style={{color: 'white'}}>karma : {auth.profile.karma}</Text>
      <Text style={{color: 'white'}}>Coins : {auth.profile.coins}</Text>
      <Text style={{color: 'white'}}>Prefix : {auth.profile.prefix}</Text>
      <Text style={{color: 'white'}}>url : {auth.profile.url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    position: 'absolute',
    height: 200,
    width: '100%',
    zIndex: 0,
  },
  avatarPosition: {
    paddingTop: 120,
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
});

export default Profile;
