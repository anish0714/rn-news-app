import React from 'react';
import {StyleSheet} from 'react-native';

//Screens
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
//Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

//Navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          }

          return <Icon name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="explore" component={ExploreScreen} />
    </Tab.Navigator>
  );
};

export default RootHome;

const styles = StyleSheet.create({});
