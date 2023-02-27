import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions } from 'react-native';
import SearchButton from './SearchButton';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function SearchInput() {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Search Term"
      />

      <SearchButton searchTerm={text}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  input: {
    fontSize: deviceWidth / 20,
    textAlign: 'left',
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 2,
    width: deviceWidth / 1.2,
    marginTop: deviceHeight / 60
  },
});
