import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function CardSearchSecond({
  r,
  titler,
  description,
  image,
  info,
}) {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.padder}>
          <View style={styles.card}>
            <View style={[{flexDirection: 'row'}]}>
              <Image style={styles.cardImage} source={image} />
              <View style={styles.cardInside}>
                <View style={styles.viewHorizontal}>
                  <Text style={styles.subTitle}>{r}</Text>
                  <Text style={styles.subTitle}>{titler}</Text>
                </View>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.cardTitle}>
                  {description}
                </Text>
                <View
                  style={{position: 'absolute', bottom: 15, paddingLeft: 15}}>
                  <Text>{info}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    borderWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  viewHorizontal: {
    flexDirection: 'row',
  },
  padder: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  padderMention: {
    paddingHorizontal: 1,
    paddingVertical: 10,
  },
  cardTitle: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontFamily: 'Gotham-Medium',
    paddingTop: 12,
  },
  subTitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'Gotham-Bold',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardInside: {
    paddingLeft: 15,
    paddingTop: 10,
    flex: 0.9,
  },
  avatarStyle: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 11,
  },
  imageOnline: {
    height: 10,
    width: 10,
  },
});
