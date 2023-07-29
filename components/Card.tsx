import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface CardProps {
  src?: string;
  bgColor: string;
  content?: string;
}

const Card = ({src, bgColor, content}: CardProps) => {
  return (
    <>
      <View style={[styles.card]}>
        <Image
          source={{uri: src}}
          style={{height: 100, width: 100, backgroundColor: bgColor}}
        />
      </View>
      <Text>{content}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    overflow: 'hidden',
  },
});

export default Card;
