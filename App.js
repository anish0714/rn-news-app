import React from 'react';
import {StyleSheet} from 'react-native';

//Components
import RootHome from './src/components/RootHome';

//Screen
import SearchScreen from './src/screens/SearchScreen';
import NewsContent from './src/screens/NewsContent';
import NewsSource from './src/screens/NewsSource';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Redux
import {Provider} from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={SearchScreen} />
          <Stack.Screen name="content" component={NewsContent} />
          <Stack.Screen name="source" component={NewsSource} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
