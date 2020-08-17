import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

//Components
import Card from '../components/Card';

//Icons
import Icon from 'react-native-vector-icons/Ionicons';

const NewsSource = ({route, navigation}) => {
  const {sourceId} = route.params[0];
  const [sourceData, setSourceData] = useState({});

  useEffect(() => {
    fetchSourceData(sourceId);
  }, []);

  const fetchSourceData = (sourceId) => {
    fetch(
      `http://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=847e59bd8f874476998547a9ca76867d`,
    )
      .then((res) => res.json())
      .then((data) => {
        setSourceData(data.articles);
      });
  };
  // console.log(sourceData);
  return (
    <View>
      <View style={styles.newsSourceContainer}>
        <Icon
          name="md-arrow-back"
          color="gray"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.newsSourceTextContainer}>
          <Text style={styles.newsSourceText}>News By The Times of India</Text>
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.title}
        data={sourceData}
        renderItem={({item}) => {
          return (
            <Card
              name={item.source.name}
              title={item.title}
              description={item.description}
              urlToImage={item.urlToImage}
              content={item.content}
              author={item.author}
            />
          );
        }}
      />
    </View>
  );
};

export default NewsSource;

const styles = StyleSheet.create({
  newsSourceContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  newsSourceTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  newsSourceText: {
    fontSize: 20,
  },
});
