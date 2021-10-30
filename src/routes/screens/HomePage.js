import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import Header from '../navigation/Header';
import axios from 'axios';
import {ButtonGroup} from 'react-native-elements';
import CardPost from '../components/CardPost';
import MiniCards from '../components/MiniCards';

const HomePage = () => {
  const [posts, setPosts] = useState();
  const [bttIndex, setIndex] = useState(0);
  const map = {0: 'new', 1: 'rising', 2: 'best', 3: 'top', 4: 'hot'};
  function load(e) {
    if (e == undefined) e = 0;
    axios
      .get('https://www.reddit.com/' + map[e] + '.json?limit=100')
      .then(response => {
        setPosts(response.data.data.children);
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
              <MiniCards title="New" image={require('../assets/new.jpeg')} />
              <MiniCards
                title="Rising"
                image={require('../assets/rising.jpg')}
              />
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
              <MiniCards title="Best" image={require('../assets/best.jpg')} />
              <MiniCards title="Top" image={require('../assets/top.jpg')} />
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
              <View style={{marginBottom: 10}}>
                <MiniCards title="Hot" image={require('../assets/hot.jpg')} />
              </View>
            </View>
          </View>

          {posts ? (
            posts.map((item, index) => (
              <CardPost
                key={index}
                avatar={require('../assets/reddit-avatar.png')}
                mention="DERNIÈRE PUBLICATION SUR"
                r="/r/"
                title={item.data.subreddit}
                image={require('../assets/empty.png')}
                description={item.data.title}
                infos={item.data.created}
                comments={item.data.num_comments}
                commentsMention=" comments"
              />
            ))
          ) : (
            <Text>Nothing</Text>
          )}
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
