import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Animated from 'react-native-reanimated';

export default function CardPost({
  avatar,
  mention,
  r,
  title,
  image,
  description,
  infos,
  comments,
  commentsMention,
}) {
  return (
    <>
      <View style={styles.padder}>
        <View style={[{flexDirection: 'row', paddingBottom: 5}]}>
          <Image style={styles.avatarStyle} source={avatar} />
          <View style={styles.padderMention}>
            <Text>{mention}</Text>
            <View style={styles.viewHorizontal}>
              <Text style={styles.subTitle}>{r}</Text>
              <Text style={styles.subTitle}>{title}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.card}>
          <View>
            <View style={[{flexDirection: 'row'}]}>
              <Image style={styles.cardImage} source={image} />
              <View style={styles.cardInside}>
                <Text
                  numberOfLines={3}
                  ellipsizeMode="tail"
                  style={styles.cardTitle}>
                  {description}
                </Text>
                <View
                  style={{position: 'absolute', bottom: 15, paddingLeft: 15}}>
                  <Text style={{paddingBottom: 10}}>{infos}</Text>
                  <View style={styles.viewHorizontal}>
                    <Text style={{opacity: 0.5}}>{comments}</Text>
                    <Text style={{opacity: 0.5}}>{commentsMention}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    borderWidth: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  viewHorizontal: {
    flexDirection: 'row',
  },
  padder: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  padderMention: {
    paddingHorizontal: 1,
    paddingVertical: 10,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Gotham-Medium',
  },
  subTitle: {
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Gotham-Bold',
  },
  cardImage: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardInside: {
    padding: 15,
    flex: 0.9,
  },
  avatarStyle: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 11,
  },
});
