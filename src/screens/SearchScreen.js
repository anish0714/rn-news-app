import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

//Icons EvilIcons
import Icon from 'react-native-vector-icons/Ionicons';

//Components
import MiniCard from '../components/MiniCard';

const SearchScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState({});
  //265c0a6f361f468f880f6ef912a16b30
  const fetchSearchData = () => {
    setIsLoading(true);
    fetch(
      `http://newsapi.org/v2/everything?q=${text}&from=2020-07-17&sortBy=publishedAt&apiKey=847e59bd8f874476998547a9ca76867d`,
    )
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data);
        setSearchData(data.articles);
        setIsLoading(false);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.searchContainer}>
        <View style={styles.searchHeader}>
          <Icon
            name="md-arrow-back"
            size={32}
            onPress={() => navigation.goBack()}
            style={styles.backArrow}
          />

          <TextInput
            value={text}
            placeholder="Click here to search"
            onChangeText={(text) => setText(text)}
            style={styles.searchTextInput}
          />

          <Icon
            name="md-send"
            size={32}
            onPress={() => fetchSearchData()}
            style={{color: 'gray'}}
          />
        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="red"
            style={styles.activityIndicator}
          />
        ) : null}

        <FlatList
          keyExtractor={(item) => item.title}
          data={searchData}
          renderItem={({item}) => {
            return (
              <MiniCard
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
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    marginTop: 10,
  },
  searchHeader: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: 'black',
  },
  searchTextInput: {
    width: '70%',
    backgroundColor: '#e6e6e6',
  },
  activityIndicator: {
    marginTop: 20,
  },
  backArrow: {
    color: 'gray',
  },
});
