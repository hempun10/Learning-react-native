import React from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const ActionCard = () => {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={{padding: 10}}>
        <View style={[styles.cardElivated]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What's new in ES7</Text>
          </View>
          <Image
            source={{
              uri: 'https://miro.medium.com/v2/resize:fit:2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png',
            }}
            height={150}
            style={{borderRadius: 6}}
          />
          <View style={styles.cardBody}>
            <Text numberOfLines={3} style={styles.cardText}>
              ES7 introduces a new mathematical operator called exponentiation
              operator. This operator is similar to using Math.pow() method.
              Exponentiation operator is represented by a double asterisk **.
              The operator can be used only with numeric values.
            </Text>
          </View>
          <View style={styles.footerBody}>
            <TouchableOpacity
              style={styles.borderStyle}
              onPress={() =>
                openWebsite(
                  'https://www.tutorialspoint.com/es6/es7_newfeatures.htm',
                )
              }>
              <Text style={styles.readMe}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openWebsite('https://hembdrpun.vercel.app/')}>
              <Text style={styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  cardElivated: {
    height: 330,
    width: 300,
    marginHorizontal: 24,
    borderRadius: 6,
    padding: 12,
    paddingBottom: 5,
    backgroundColor: '#fff',
    elevation: 4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
  },
  cardBody: {
    padding: 10,
  },
  cardText: {
    color: '#636363',
  },
  footerBody: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  borderStyle: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#f5f5',
  },
  readMe: {
    color: '#000',
  },
  socialLink: {
    color: '#000',
    borderBottomColor: '#f5f5',
    borderBottomWidth: 3,
  },
});

export default ActionCard;
