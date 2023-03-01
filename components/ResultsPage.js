import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions, FlatList } from 'react-native';

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import Title from './Title';
import ResultItem from './ResultItem';

const maxArticles = 100;

const getArticlesObject = async(searchTerm) => {
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
      
      return json;
    } catch (error) {
       console.error(error);
    }
};

const processArticleData = (articlesObj) => {
    articlesObj.then((data) => {
        const articles = data["articles"];
        for (let i = 0; i < maxArticles; i++) {
            console.log(articles[i]["title"]);
        }
    }).catch((error) => {
        console.error(error);
    });
}

export default function ResultsPage({route, navigation}) {
    const articleData = getArticlesObject(route.params.searchTerm)["articles"];

    return (
        <View style={styles.container}>
            <Title title="Super News" />
            <FlatList
                data={articleData}
                ResultItem={ResultItem}
            />
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
