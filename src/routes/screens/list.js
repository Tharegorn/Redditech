import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useAuth} from '../utils/useauth';
import axios from 'axios';
import CardPost from '../components/CardPost';
import Header from '../navigation/Header';
import {unsubscribe} from '../utils/PostReddit';

const list = () => {
  const auth = useAuth();
  const [subs, setSubs] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://oauth.reddit.com/subreddits/mine',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + auth.token,
    },
  };
  axios
    .request(options)
    .then(res => {
      if (res.data.data.children.length > 0) {
        setSubs(res.data.data.children);
      } else setSubs(null);
    })
    .catch(e => {
      console.error(e);
    });
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mention}>Library</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {subs ? (
            subs.map((item, index) => (
              <View key={index}>
                <CardPost
                  mention="You are subbed to"
                  r="/r/"
                  title={item.data.display_name}
                  avatar={
                    item.data.community_icon
                      ? {uri: item.data.community_icon.split('?')[0]}
                      : require('../assets/reddit-avatar.png')
                  }
                  image={
                    item.data.banner_background_image
                      ? {uri: item.data.banner_background_image.split('?')[0]}
                      : require('../assets/empty.png')
                  }
                  description={item.data.public_description}
                  comments={item.data.subscribers}
                  commentsMention=" subscribers"
                />
                <View style={styles.button}>
                  <Button
                    color="rgba(255, 255, 255, 0.00)"
                    title="UNSUBSCRIBE"
                    onPress={() => {
                      unsubscribe(item.data.title, auth.token);
                    }}></Button>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.container}>
              <Text style={styles.text_position}>
                Enter in the world of Reddit {'\n'}
                with a simple search.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      <View />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101111',
    flex: 1,
  },
  cardStyle: {
    borderRadius: 6,
    borderWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    shadowColor: 'rgba(0,0,0,0)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  paragraph: {
    color: '#FFF',
    paddingLeft: 0,
  },
  background: {
    position: 'absolute',
    height: 130,
    width: '100%',
    zIndex: 0,
    left: 0,
    right: 0,
  },
  button: {
    width: 120,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 30,
    paddingLeft: 2,
  },
  illustration_position: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '25%',
  },
  illustration: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  illustration_position: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '25%',
  },
  header: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 60,
    backgroundColor: 'rgba(16, 17, 17, 0.1)',
  },
  mention: {
    fontFamily: 'Gotham-Bold',
    fontSize: 30,
    color: '#FFF',
  },
});

export default list;
