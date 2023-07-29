import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from './Card';

const ElivatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elivated Card</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.cardElivated]}>
          <Card
            bgColor="red"
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/Pokhara-valley-nepal.jpg"
          />

          <Card
            bgColor="red"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/4a/kathmandu.jpg?w=700&h=500&s=1"
          />
          <Card
            bgColor="red"
            src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/656bb11870d1786be69ae178e45d0723244384c6/big-3985131bf28128fdc4c2ffcd12779cb0.jpg"
          />
          <Card
            bgColor="red"
            src="https://www.andbeyond.com/wp-content/uploads/sites/5/nepal-village.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    padding: 8,
  },
  cardElivated: {
    flexDirection: 'row',
    elevation: 4,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: '#f5f5f5',
    shadowOpacity: 0.4,
  },
});

export default ElivatedCard;
