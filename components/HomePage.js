import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions, Image } from 'react-native';

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import Title from './Title';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Title title="Super News" />
      <SearchInput />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
