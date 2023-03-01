import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ResultItem({articleTitle, articleDescription}) {
  return (
    <View style={styles.container}>
        <Text style={styles.articleTitle}>{articleTitle}</Text>
        <Text style={styles.articleDescription}>
            {articleDescription}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    margin: 2
  },

  articleTitle: {
    fontSize: deviceWidth / 15,
  },

  articleDescription: {
    fontSize: deviceWidth / 25,
    margin: 5
  }
});
