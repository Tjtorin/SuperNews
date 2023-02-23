import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function SearchInput() {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Search Term"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    textAlign: 'left',
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 2,
    width: deviceWidth / 1.2,
    marginTop: deviceHeight / 60
  }
});
