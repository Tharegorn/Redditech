import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBarComponent = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.mention}>Search</Text>
      </View>

      <View style={styles.input}>
        <View style={{paddingLeft: 10}}>
          <Icon name="search" size={22} color="#FFF" />
        </View>
        <View style={{paddingLeft: 10}}>
          <TextInput placeholder="Search on Reddit" />
        </View>
      </View>
    </>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  mention: {
    fontFamily: 'Gotham-Bold',
    fontSize: 35,
    color: '#FFF',
  },
  header: {
    height: 60,
    paddingHorizontal: 15,
    marginTop: 60,
  },
  header_inside: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  search_icon: {
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 30,
  },
  dark_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
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
  content_of_safe_area: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  inner: {
    flex: 1,
    paddingTop: 50,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  illustration_position: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-50%',
  },
  illustration: {
    width: 150,
    height: 113,
    alignSelf: 'center',
  },
  text_position: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 5,
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginLeft: 16,
  },
  item_icon: {
    marginLeft: 15,
  },
});
