import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

//Navigation
import {useNavigation} from '@react-navigation/native';

const Card = ({title, urlToImage, description, name, content, author}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('content', [
          {
            title,
            urlToImage,
            description,
            name,
            content,
            author,
          },
        ]);
      }}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: urlToImage,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardNameContainer}>
          <Text>{name}</Text>
        </View>

        <View style={styles.cardTextContainer}>
          <Text ellipsizeMode="tail" numberOfLines={2} style={styles.cardTitle}>
            {title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    // marginTop: 10,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardTextContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 25,
    color: 'black',
  },
  cardDescription: {
    width: Dimensions.get('screen').width - 25,
    color: 'black',
  },
  cardNameContainer: {
    alignItems: 'center',
  },
});
