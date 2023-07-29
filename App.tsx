import React from 'react';
import {
  AccessibilityInfo,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FlatCards from './components/FlatCards';
import ElivatedCard from './components/ElivatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElivatedCard />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#ffff',
  },
  textBlack: {
    color: '#000',
  },
});

export default App;
