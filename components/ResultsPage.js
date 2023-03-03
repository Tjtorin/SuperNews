import * as React from 'react';
import { TextInput, View, StyleSheet, Text, Dimensions, FlatList } from 'react-native';

import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import Title from './Title';
import ResultItem from './ResultItem';

const maxArticles = 100;
// I need to use a global variable for the articles because I need to update this variable with the articles
// once they are loaded and then re-render the flat list using this data
let globalArticles; 

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

const processArticleData = (articlesObj, setSelectedId) => {
    articlesObj.then((data) => {
        const articles = data["articles"];

        // Give each article an id (for flatlist)
        for (let i = 0; i < maxArticles; i++) {
            articles[i]["id"] = i;
        }

        globalArticles = articles;
        setSelectedId(1);
    }).catch((error) => {
        console.error(error);
    });
}

const renderItem = ({ item }) => (
    <ResultItem title={item.title} description={item.description} image={item.urlToImage} />
);

export default function ResultsPage({route, navigation}) {
    const [selectedId, setSelectedId] = React.useState(); // Im just using this to re-render the FlatList

    let articleData = getArticlesObject(route.params.searchTerm);
    processArticleData(articleData, setSelectedId);

    return (
        <View style={styles.container}>
            <Title title="Super News" />
            <FlatList
                extraData={selectedId}
                data={globalArticles}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
