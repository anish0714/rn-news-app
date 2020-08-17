import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

//Components
import Header from '../components/Header';
import NewsTab from '../components/NewsTab';

//the-times-of-india
const ExploreScreen = ({navigation}) => {
  return (
    <View>
      <Header />

      <View style={styles.exploreCardOuterContainer}>
        <TouchableOpacity
          onPress={() => {
            // fetchSourceData('the-times-of-india');
            navigation.navigate('source', [{sourceId: 'the-times-of-india'}]);
          }}>
          <NewsTab name="Times of India" />
        </TouchableOpacity>

        <NewsTab name="India.com" />
        <NewsTab name="Indian Express" />
        <NewsTab name="NDTV News" />
        <NewsTab name="Zoom" />
        <NewsTab name="News18" />
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  exploreCardOuterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
