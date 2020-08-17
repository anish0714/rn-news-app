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

const MiniCard = ({title, urlToImage, description, name, content, author}) => {
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
      <View style={styles.miniCardContainer}>
        <Image
          source={{
            uri: urlToImage,
          }}
          style={styles.miniCardImage}
        />

        <View style={styles.miniTextContainer}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={styles.miniTextContainerTitle}>
            {title}
          </Text>

          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={styles.miniTextContainerDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  miniCardContainer: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
  },
  miniCardImage: {
    width: '45%',
    height: 100,
  },
  miniTextContainer: {
    paddingLeft: 7,
  },
  miniCardTextTop: {
    fontSize: 16,
    width: Dimensions.get('screen').width / 2,
  },
  miniCardTextBottom: {
    fontSize: 12,
  },
  miniTextContainerTitle: {
    fontSize: 16,
    width: Dimensions.get('screen').width / 2,
    color: 'black',
  },
  miniTextContainerDescription: {
    fontSize: 12,
    color: 'gray',
    width: Dimensions.get('screen').width / 2,
  },
});
