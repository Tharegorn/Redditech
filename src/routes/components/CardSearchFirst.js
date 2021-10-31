import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function CardSearchFirst({
  avatar,
  mention,
  r,
  titler,
  follow,
  image,
  online,
  mentionFollow,
  mentionOnline,
  imageOnline,
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
              <Text style={styles.subTitle}>{titler}</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={[{flexDirection: 'row'}]}>
            <Image style={styles.cardImage} source={image} />
            <View style={styles.cardInside}>
              <Text
                style={{
                  fontFamily: 'GothamBook',
                  fontSize: 18,
                  paddingBottom: 5,
                }}>
                {follow}
              </Text>
              <Text style={styles.cardTitle}>{mentionFollow}</Text>

              <View style={{position: 'absolute', bottom: 5, paddingLeft: 15}}>
                <Text
                  style={{
                    fontFamily: 'GothamBook',
                    fontSize: 14,
                    paddingBottom: 5,
                  }}>
                  {mentionOnline}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{paddingBottom: 10}}>{online}</Text>
                  <View style={{marginLeft: 5, marginBottom: 10}}>
                    <Image style={styles.imageOnline} source={imageOnline} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
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
    paddingHorizontal: 15,
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
    height: 130,
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
  imageOnline: {
    height: 10,
    width: 10,
  },
});
