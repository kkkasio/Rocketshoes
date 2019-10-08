import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';
import reactotronSaga from 'reactotron-redux-saga';

import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronSaga())
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
