import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Animated from 'react-native-reanimated';

export default function MiniCards({title, image}) {
  return (
    <>
      <View style={styles.padder}>
        <TouchableOpacity style={styles.card}>
          <View style={[{flexDirection: 'row', paddingBottom: 5}]}>
            <Image style={styles.cardImage} source={image} />
            <View style={{marginVertical: 15, marginHorizontal: 10}}>
              <Text style={{fontFamily: 'Gotham-Bold', color: '#FFF'}}>
                {' '}
                {title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 50,
    borderRadius: 6,
    borderWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  padder: {
    paddingBottom: 10,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Gotham-Medium',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
});
