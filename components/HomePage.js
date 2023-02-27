import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions } from 'react-native';

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import Title from './Title';

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
