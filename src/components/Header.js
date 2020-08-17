import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Icons 
import Icon from 'react-native-vector-icons/Ionicons';

//Navigation
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>News</Text>
      <Icon
        name="search"
        style={styles.headerIcon}
        onPress={() => navigation.navigate('search')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    height: 50,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10,
  },
  headerText: {
    fontSize: 22,
    margin: 8,
    fontWeight: 'bold',
    color: 'white',
  },
  headerIcon: {
    color: 'white',
    fontSize: 32,
    margin: 5,
  },
});
