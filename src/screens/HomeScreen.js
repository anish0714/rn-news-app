import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//Components
import Header from '../components/Header';
import Card from '../components/Card';


const HomeScreen = () => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    fetch(
      'http://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=265c0a6f361f468f880f6ef912a16b30',
    )
      .then((res) => res.json())
      .then((data) => {
        setNewsData(data.articles);
        setLoading(false);
      });
  };
  //console.log('content=', newsData[1].content);
  return (
    <View style={styles.homeScreenView}>
      <Header />
      {loading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item) => item.title}
          data={newsData}
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
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenView: {
    flex: 1,
  },
  activityIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
