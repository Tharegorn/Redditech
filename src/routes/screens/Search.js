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
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardPost from '../components/CardPost';
import CardSearchFirst from '../components/CardSearchFirst';
import CardSearchSecond from '../components/CardSearchSecond';

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
              placeholder="Search on Reddit                                     "
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
                <CardSearchFirst
                  avatar={require('../assets/reddit-avatar.png')}
                  mention="MORE INSIDE"
                  r="/r/"
                  titler={infos.name}
                  image={require('../assets/empty.png')}
                  follow={infos.followers}
                  mentionFollow="Followers"
                  mentionOnline="Online Redditors"
                  online={infos.online}
                  imageOnline={require('../assets/online.png')}
                />
              </TouchableOpacity>
              <View style={{padding: 5}}></View>
              {posts ? (
                posts.map((item, index) => (
                  <CardSearchSecond
                    key={index}
                    r="/r/"
                    titler={infos.name}
                    image={require('../assets/empty.png')}
                    description={item.data.title}
                    info={item.data.created}
                  />
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
