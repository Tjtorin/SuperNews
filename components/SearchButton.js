import * as React from 'react';
import { Pressable, View, StyleSheet, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function SearchButton({searchTerm}) {
  const navigation = useNavigation();

  return (
      <View>
        <Pressable
          onPress={() => {
              navigation.navigate("Results", {searchTerm: searchTerm});
          }}

          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#2993c4' : '#34b1eb',
            },
            styles.button,
          ]}>

          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 2,
    marginTop: deviceHeight / 40,
    width: deviceWidth / 3.5
  },

  buttonText: {
    fontSize: deviceWidth / 15,
    color: 'white',
    textAlign: 'center'
  }
});
