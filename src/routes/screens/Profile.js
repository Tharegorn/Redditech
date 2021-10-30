import React, {useState, useEffect} from 'react';
import {Text, Image, View} from 'react-native';
import {useAuth} from '../utils/useauth';

const Profile = () => {
  const auth = useAuth();
  useEffect(() => {
    auth.Profile();
  }, []);
  return (
    <>
      <View>
        <Text style={{color: 'black'}}>Name : {auth.profile.name}</Text>
        <Text style={{color: 'black'}}>Desc : {auth.profile.desc}</Text>
        <Text style={{color: 'black'}}>karma : {auth.profile.karma}</Text>
        <Text style={{color: 'black'}}>Coins : {auth.profile.coins}</Text>
        <Text style={{color: 'black'}}>Prefix : {auth.profile.prefix}</Text>
        <Text style={{color: 'black'}}>url : {auth.profile.url}</Text>
        {auth.profile.profile_pic ? (
          <Image
            source={{uri: auth.profile.profile_pic}}
            style={{height: 100, width: 100, borderRadius: 300}}
          />
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

export default Profile;
