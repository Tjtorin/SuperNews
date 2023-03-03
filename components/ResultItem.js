import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import RenderHtml from 'react-native-render-html';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ResultItem({title, description, image}) {
  const source = {
    html: "Test",
  };

  console.log(description);

  return (
    <View style={styles.container}>
        <Text style={styles.articleTitle}>{title}</Text>
        <Image source={{uri: image}}/>
        <RenderHtml
          source={source}
          contentWidth={deviceWidth}
        />
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
  },

  image: {
    width: deviceWidth / 2,
    height: deviceWidth / 2
  }
});
