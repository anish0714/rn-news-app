import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

//Icons
import Icon from 'react-native-vector-icons/Ionicons';

const NewsContent = ({route, navigation}) => {
  const {
    title,
    urlToImage,
    description,
    name,
    content,
    author,
  } = route.params[0];

  return (
    <ScrollView>
      <View>
        <View style={styles.newsContentHeader}>
          <Icon
            name="md-arrow-back"
            color="gray"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.newsContentHeaderTextContainer}>
            <Text style={styles.newsContainerHeaderText}>News Content</Text>
          </View>
        </View>
        <Image
          source={{
            uri: urlToImage,
          }}
          resizeMode="contain"
          style={styles.contentImage}
        />

        <View style={styles.bottomContent}>
          <View style={styles.authorAndNameContainer}>
            <Text>{name}</Text>
            {author && (
              <View style={styles.contentNameContainer}>
                <Text>Author</Text>
                <Text
                  style={styles.contentName}
                  ellipsizeMode="tail"
                  numberOfLines={2}>
                  {author}
                </Text>
              </View>
            )}
          </View>
          <Text style={styles.contentTitle}>{title}</Text>
          <Text style={styles.contentDescription}>{description}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsContent;

const styles = StyleSheet.create({
  contentImage: {
    width: '100%',
    height: 250,
  },
  bottomContent: {
    margin: 10,
  },
  authorAndNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentNameContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  contentName: {
    marginLeft: 10,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  contentDescription: {
    fontSize: 18,
    marginBottom: 10,
    color: 'gray',
  },
  content: {
    fontSize: 18,
    marginBottom: 10,
    color: 'gray',
  },
  newsContentHeader: {
    flexDirection: 'row',
    margin: 5,
  },
  newsContentHeaderTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  newsContainerHeaderText: {
    fontSize: 20,
  },
});
