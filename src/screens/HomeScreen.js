import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

//Components
import Header from '../components/Header';
import Card from '../components/Card';

//Redux
import {connect} from 'react-redux';

//actions
import {getHeadlines} from '../actions/homeScreenAction';

const HomeScreen = ({homeScreenReducer: {newsData, loading}, getHeadlines}) => {
  useEffect(() => {
    getHeadlines();
  }, []);


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

HomeScreen.propTypes = {
  homeScreenReducer: PropTypes.object.isRequired,
  getHeadlines: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  homeScreenReducer: state.homeScreenReducer,
});

export default connect(mapStateToProps, {getHeadlines})(HomeScreen);

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
