import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';
import React from 'react'
import { store } from './src/utils/store/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation/>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
