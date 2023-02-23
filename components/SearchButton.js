import * as React from 'react';
import { Pressable, View, StyleSheet, Text, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class SearchButton extends React.Component {
    render(){
        return (
            <View>
              <Pressable
                onPress={() => {
                    console.log("Navigating to next page");
                    this.props.navigation.navigate("Test");
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
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 2,
    marginTop: deviceHeight / 40
  },

  buttonText: {
    fontSize: 25,
    color: 'white'
  }
});
