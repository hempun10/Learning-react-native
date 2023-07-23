import React from 'react';
import {Text, View, SafeAreaView, TextInput} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World !</Text>
        <TextInput
          defaultValue="You can type in me"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
