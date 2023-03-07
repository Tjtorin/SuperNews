import * as React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, useWindowDimensions, TouchableHighlight } from 'react-native';
import * as Linking from 'expo-linking';
import RenderHtml from 'react-native-render-html';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ResultItem({title, description, image, url}) {
  const html = description;
  const {width} = useWindowDimensions();

  const source = {
    html: html,
  };

  // If image can't load or doesn't exist then remove it's styling to remove blank space
  const imageStyle = image ? styles.articleImage : {};

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <Text style={styles.articleTitle}>{title}</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <RenderHtml
          source={source}
          contentWidth={width}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    padding: 5,
    width: deviceWidth / 1.1
  },

  articleTitle: {
    fontSize: deviceWidth / 15,
  },

  articleDescription: {
    fontSize: deviceWidth / 25,
    margin: 5
  },

  articleImage: {
    height: deviceHeight / 5,
    width: deviceWidth / 1.2,
    margin: deviceHeight / 60
},
});
