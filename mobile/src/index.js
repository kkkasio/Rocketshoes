import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';
import color from './styles/colors';

import './config/ReactotronConfig';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={color.dark} barStyle="light-content" />
      <Routes />
    </>
  );
}
