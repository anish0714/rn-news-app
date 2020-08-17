import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NewsTab = ({name}) => {
  return (
    <View style={styles.newsTabContainer}>
      <Text style={styles.newsTabText}>{name}</Text>
    </View>
  );
};

export default NewsTab;

const styles = StyleSheet.create({
  newsTabContainer: {
    backgroundColor: 'red',
    width: 180,
    borderRadius: 4,
    height: 50,
    marginTop: 10,
    alignItems: 'center',
  },
  newsTabText: {
    margin: 8,
    fontSize: 22,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});
