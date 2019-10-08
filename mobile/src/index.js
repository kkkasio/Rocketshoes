import React from 'react';

import './config/ReactotronConfig';

import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import store from './store/index';

import Routes from './routes';
import color from './styles/colors';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={color.dark} barStyle="light-content" />
        <Routes />
      </Provider>
    </>
  );
}
