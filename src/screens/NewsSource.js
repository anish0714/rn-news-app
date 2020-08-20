import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

//Components
import Card from '../components/Card';

//Icons
import Icon from 'react-native-vector-icons/Ionicons';

//Redux
import {connect} from 'react-redux';

//actions
import {getSourceData} from '../actions/homeScreenAction';

const NewsSource = ({
  route,
  navigation,
  getSourceData,
  homeScreenReducer: {sourceData, loading},
}) => {
  const {sourceId} = route.params[0];

  useEffect(() => {
    getSourceData(sourceId);
  }, []);

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

      {loading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
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
      )}
    </View>
  );
};
NewsSource.prototypes = {
  homeScreenReducer: PropTypes.object.isRequired,
  getSourceData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  homeScreenReducer: state.homeScreenReducer,
});

export default connect(mapStateToProps, {getSourceData})(NewsSource);

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
