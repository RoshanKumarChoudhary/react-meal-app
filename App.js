import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Fonts from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MainNavigator } from './navigations/MealNavigator';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import mealReducer from './store/reducers/meals';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const fetchfonts = () => {
  Fonts.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  enableScreens();
  const rootReducer = combineReducers({
    meal: mealReducer
  })
  const store = createStore(rootReducer, composeWithDevTools());
  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    return <AppLoading startAsync={fetchfonts} onFinish={() => setFontLoaded(true)} onError = {console.warn} />
  }
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
