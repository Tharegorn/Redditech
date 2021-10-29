import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Header from '../navigation/Header';
import axios from 'axios';
import {Card, ButtonGroup} from 'react-native-elements';
import HomePage from '../screens/HomePage';
import {StylesContext, StylesProvider} from '@material-ui/styles';
import Animated from 'react-native-reanimated';

export default function MiniCards({title, image}) {
  return (
    <>
      <View style={styles.padder}>
        <TouchableOpacity style={styles.card}>
          <Animated.View style={[{flexDirection: 'row', paddingBottom: 5}]}>
            <Image style={styles.cardImage} source={image} />
            <View style={{marginVertical: 15, marginHorizontal: 10}}>
              <Text style={{fontFamily: 'Gotham-Bold', color: '#FFF'}}>
                {' '}
                {title}
              </Text>
            </View>
          </Animated.View>
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
