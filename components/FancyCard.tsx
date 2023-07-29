import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const FancyCard = () => {
  return (
    <View style={{padding: 4}}>
      <Text style={styles.headingText}>Trending Foods</Text>
      <View style={{paddingVertical: 10}}>
        <ScrollView horizontal>
          <View style={[styles.card, styles.cardElevate]}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Nepali_dal-bhat-tarkari.jpg/1200px-Nepali_dal-bhat-tarkari.jpg',
              }}
              height={180}
              style={styles.imageStyle}
            />
            <View style={[styles.cardBody]}>
              <Text style={styles.cardTitle}>Dal Baht</Text>
              <Text style={styles.cardLabel}>Thakali Set</Text>
              <Text style={styles.cardDesc}>Dal Bhat power 24 hour</Text>
              <Text style={styles.cardFooter}>15 min away</Text>
            </View>
          </View>
          <View style={[styles.card, styles.cardElevate]}>
            <Image
              source={{
                uri: 'https://www.stunningnepal.com/wp-content/uploads/2019/11/Nepali-PaniPuri-1024x1024.jpg',
              }}
              height={180}
              style={styles.imageStyle}
            />
            <View style={[styles.cardBody]}>
              <Text style={styles.cardTitle}>Pani Puri</Text>
              <Text style={styles.cardLabel}>Chwawsaii</Text>
              <Text style={styles.cardDesc}>Amelo Peroo Chwasii k vai</Text>
              <Text style={styles.cardFooter}>5 min away</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
  imageStyle: {
    objectFit: 'cover',
    borderRadius: 6,
  },
  card: {
    height: 330,
    width: 300,
    marginHorizontal: 24,
    borderRadius: 6,
    padding: 12,
    paddingBottom: 5,
  },
  cardElevate: {
    backgroundColor: '#fff',
    elevation: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 7,
  },
  cardTitle: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardLabel: {
    color: '#454545',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
    textAlign: 'center',
  },
  cardDesc: {
    color: '#797777',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 4,
  },
  cardFooter: {
    color: '#000',
    textAlign: 'center',
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default FancyCard;
