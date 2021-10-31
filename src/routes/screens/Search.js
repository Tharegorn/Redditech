import React, {useState, useEffect} from 'react';
import {
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {useAuth} from '../utils/useauth';
import {Card} from 'react-native-elements';
import axios from 'axios';
import SearchBarComponent from '../components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Search = () => {
  const auth = useAuth();
  const [bttProps, setBtt] = useState('connect');
  const [search, setSearch] = useState('');
  const [infos, setInfos] = useState(null);
  const [posts, setPosts] = useState(null);
  function change(e) {
    setSearch(e);
    setPosts(null);
    axios
      .get('https://www.reddit.com/r/' + e + '/about.json')
      .then(response => {
        const data = response.data.data;
        if (data.url != null) {
          setInfos({
            accept_follows: data.accept_followers,
            name: data.title,
            sub_name: data.url,
            header: data.header_img,
            followers: data.subscribers,
            online: data.active_user_count,
            description: data.public_description,
          });
        } else {
          setInfos(null);
        }
      })
      .catch(error => {
        setInfos(null);
      });
  }
  useEffect(() => {
    if (auth.token) {
      setBtt('qsd');
    } else {
      setBtt('connect');
    }
  }, []);
  function getPosts() {
    axios
      .get('https://www.reddit.com/r/' + search + '/top.json?limit=100')
      .then(response => {
        setPosts(response.data.data.children);
      })
      .catch(error => {
        setPosts();
      });
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mention}>Search</Text>
        </View>
        <View style={styles.input}>
          <View style={{paddingLeft: 10}}>
            <Icon name="search" size={22} color="#FFF" />
          </View>
          <View style={{paddingLeft: 10}}>
            <TextInput
              placeholder="Search on Reddit"
              onChangeText={e => {
                change(e);
              }}
              value={search}
            />
          </View>
        </View>
        <ScrollView>
          {infos == null ? (
            <View style={styles.illustration_position}>
              <Image
                style={styles.illustration}
                source={require('../assets/illustrationSearch.png')}
              />
              <Text style={styles.text_position}>
                Enter in the world of Reddit {'\n'}
                with a simple search.
              </Text>
            </View>
          ) : (
            <>
              <TouchableOpacity onPress={() => getPosts()}>
                <Card>
                  <Card.FeaturedTitle>{infos.name}</Card.FeaturedTitle>
                  <Card.Title>{infos.sub_name}</Card.Title>
                  <Card.Title>Follows : {infos.followers}</Card.Title>
                  <Card.Title>Online : {infos.online}</Card.Title>
                  <Card.Divider />
                  <Card.Image
                    source={{uri: infos.header}}
                    style={{height: 100}}
                  />
                  <Text>Description : {infos.description}</Text>
                  {bttProps == 'connect' ? (
                    <Button
                      title="Connect to reddit account"
                      onPress={() => {
                        auth.Authenticate();
                        setSearch('');
                        setInfos(null);
                      }}></Button>
                  ) : (
                    <Text style={{color: 'black'}}>
                      Faut faire le bouton pour sub
                    </Text>
                  )}
                </Card>
              </TouchableOpacity>
              {posts ? (
                posts.map((item, index) => (
                  <Card key={index}>
                    <Card.Title>/r/{item.data.subreddit}</Card.Title>
                    <Card.Title>{item.data.title}</Card.Title>
                    <Card.Title>{item.data.created}</Card.Title>
                    <Card.Divider />
                    {item.data.thumbnail ? (
                      <Card.Image
                        source={{uri: item.data.thumbnail}}
                        style={{
                          height: item.data.thumbnail_height,
                          width: item.data.thumbnail_width,
                        }}></Card.Image>
                    ) : (
                      <Text>NoImage</Text>
                    )}
                    {/* <Text>https://reddit.com{item.data.permalink}</Text> */}
                    <Text>{item.data.num_comments} Comments</Text>
                  </Card>
                ))
              ) : (
                <Text></Text>
              )}
            </>
          )}
        </ScrollView>
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
    height: 60,
    paddingHorizontal: 15,
    marginTop: 60,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
    marginHorizontal: 15,
    marginBottom: 20,
    fontFamily: 'GothamBook',
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mention: {
    fontFamily: 'Gotham-Bold',
    fontSize: 35,
    color: '#FFF',
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
  text_position: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 15,
    fontFamily: 'GothamBook',
    fontSize: 18,
    lineHeight: 30,
    opacity: 0.5,
  },
});
export default Search;
