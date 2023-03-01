import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions } from 'react-native';

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import Title from './Title';

const getArticles = async(searchTerm) => {
    let url = `https://newsapi.org/v2/everything/?q=${searchTerm}`;

    try {
      let response = await fetch(
        url,
        {
            headers: {
                "X-Api-Key": "4e90b3063a404d37ba3813afcc50fc7a"
            },
        }
      );

      let json = await response.json();
      
      console.log(json.articles);
      return searchTerm;
    } catch (error) {
       console.error(error);
    }
  };

export default function ResultsPage({route, navigation}) {
    return (
        <View style={styles.container}>
        <Title title="Super News" />
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
