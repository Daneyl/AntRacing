/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root" initial>
          <Stack key="auth" initial hideNavBar>
            <Scene key="login" component={Login} hideNavBar />
          </Stack>
          <Stack key="main" hideNavBar>
            <Scene key="home" component={Home} />
          </Stack>
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;
