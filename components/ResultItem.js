import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions, Image, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function ResultItem({title, description, image}) {
  const html = description;
  const {width} = useWindowDimensions();

  const source = {
    html: html,
  };

  // If image can't load or doesn't exist then remove it's styling to remove blank space
  const imageStyle = image ? styles.articleImage : {};

  return (
    <View style={styles.container}>
        <Text style={styles.articleTitle}>{title}</Text>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
        <RenderHtml
          source={source}
          contentWidth={width}
        />
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
