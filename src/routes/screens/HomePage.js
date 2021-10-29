import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import Header from '../navigation/Header';
import axios from 'axios';
import {Card, ButtonGroup} from 'react-native-elements';

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
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../assets/FrameOrange.png')}
            style={{
              position: 'absolute',
              height: 200,
              width: '100%',
              zIndex: 0,
              left: 0,
              right: 0,
            }}
          />
          <Header />
          <ButtonGroup
            buttons={['New', 'Rising', 'Best', 'Top', 'Hot']}
            selectedIndex={bttIndex}
            onPress={e => {
              setIndex(e);
              load(e);
            }}
          />
          {posts ? (
            posts.map((item, index) => (
              <Card containerStyle={styles.cardStyle} key={index}>
                <Card.Title>
                  <Text style={styles.paragraph}>/r/{item.data.subreddit}</Text>
                </Card.Title>
                {item.data.thumbnail ? (
                  <Card.Image
                    source={{uri: item.data.thumbnail}}
                    style={{
                      width: '100%',
                    }}></Card.Image>
                ) : (
                  <Text>NoImage</Text>
                )}
                <Card.Title>{item.data.title}</Card.Title>
                <Card.Title>{item.data.created}</Card.Title>

                {/* <Text>https://reddit.com{item.data.permalink}</Text> */}
                <Text>{item.data.num_comments} Comments</Text>
              </Card>
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
});

export default HomePage;
