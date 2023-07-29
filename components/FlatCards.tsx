import React from 'react';
import {View, Text, useColorScheme, StyleSheet, Image} from 'react-native';
import Card from './Card';

const FlatCards = () => {
  const isDark = useColorScheme();
  return (
    <View>
      <Text
        style={[isDark ? style.whiteText : style.darkText, style.headingText]}>
        Flat Card
      </Text>
      <View style={style.container}>
        <Card src="https://reactjs.org/logo-og.png" bgColor="#db2a2a" />
        <Card
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          bgColor="#50dbb4"
        />
        <Card
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
          bgColor="#5da3fa"
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  darkText: {
    color: '#000',
  },
  whiteText: {
    color: '#fff',
  },
  headingText: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
  },
});

export default FlatCards;
