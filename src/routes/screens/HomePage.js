import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Header from '../navigation/Header';
import axios from 'axios';
import CardPost from '../components/CardPost';
import MiniCards from '../components/MiniCards';

const HomePage = () => {
  const [posts, setPosts] = useState();
  const [bttIndex, setBtt] = useState(0);
  const [count, setCount] = useState(100);

  const map = {
    0: { name: 'new', desc: 'DERNIÈRE PUBLICATION SUR' },
    1: { name: 'rising', desc: 'PUBLICATION MONTANTE SUR' },
    2: { name: 'best', desc: 'MEILLEURE PUBLICATION SUR' },
    3: { name: 'top', desc: 'TOP PUBLICATION SUR' },
    4: { name: 'hot', desc: 'HOT PUBLICATION SUR' },
  };
  function load(e) {
    if (e == undefined) e = 0;
    axios
      .get('https://www.reddit.com/' + map[e].name + '.json?limit=100')
      .then(response => {
        setPosts(response.data.data.children);
      })
      .catch(error => {
        setPosts();
      });
  }
  function reload() {
    axios
      .get('https://www.reddit.com/' + map[bttIndex].name + '.json?limit=100')
      .then(response => {
        setPosts(posts.concat(response.data.data.children));
      })
      .catch(error => {
        setPosts();
      });
  }
  useEffect(() => {
    load();
  }, []);
  return (
    <View>
      <StatusBar translucent={true} backgroundColor={'rgba(0, 0, 0, 0.5)'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={styles.background}
            source={require('../assets/FrameOrange.png')}
          />
          <Header />
          <View>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                },
              ]}>
              <TouchableOpacity onPress={() => {setBtt(0); load(0) }}>
                <MiniCards title="New" image={require('../assets/new.jpeg')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {setBtt(1); load(1) }}>
                <MiniCards
                  title="Rising"
                  image={require('../assets/rising.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                },
              ]}>
              <TouchableOpacity onPress={() => {setBtt(2); load(2) }}>
                <MiniCards title="Best" image={require('../assets/best.jpg')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {setBtt(3); load(3) }}>
                <MiniCards title="Top" image={require('../assets/top.jpg')} />
              </TouchableOpacity>
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                },
              ]}>
              <View style={{ marginBottom: 10 }}>
                <TouchableOpacity onPress={() => {setBtt(4); load(4) }}>
                  <MiniCards title="Hot" image={require('../assets/hot.jpg')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {posts ? (
            posts.map((item, index) => (
              <CardPost
                key={index}
                avatar={require('../assets/reddit-avatar.png')}
                mention={map[bttIndex].desc}
                r="/r/"
                title={item.data.subreddit}
                image={item.data.thumbnail != "self" ? { uri: item.data.thumbnail } : require('../assets/empty.png')}
                description={item.data.title}
                infos={item.data.created}
                comments={item.data.num_comments}
                commentsMention=" comments"
              />
            ))
          ) : (
            <></>
          )}
          {posts ? <Button title="+" onPress={() => { reload(); setCount(count + 100) }} /> : <></>}
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    shadowColor: 'rgba(0,0,0,0)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
  },
  paragraph: {
    color: '#FFF',
    paddingLeft: 0,
  },
  background: {
    position: 'absolute',
    height: 200,
    width: '100%',
    zIndex: 0,
    left: 0,
    right: 0,
  },
});

export default HomePage;
