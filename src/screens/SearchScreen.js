import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

//Icons IonicIcons
import Icon from 'react-native-vector-icons/Ionicons';

//Components
import MiniCard from '../components/MiniCard';

//Redux
import {connect} from 'react-redux';

//actions
import {getSearchData} from '../actions/homeScreenAction';

const SearchScreen = ({
  navigation,
  getSearchData,
  homeScreenReducer: {searchData, loading},
}) => {
  const [text, setText] = useState('');
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
            onPress={() => {
              getSearchData(text);
            }}
            style={{color: 'gray'}}
          />
        </View>
        {loading ? (
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

SearchScreen.propTypes = {
  homeScreenReducer: PropTypes.object.isRequired,
  getSearchData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  homeScreenReducer: state.homeScreenReducer,
});

export default connect(mapStateToProps, {getSearchData})(SearchScreen);

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
