/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// function enableHttpDebugging() {
//   global.XMLHttpRequest = global.originalXMLHttpRequest
//     ? global.originalXMLHttpRequest
//     : global.XMLHttpRequest;
//
//   global.FormData = global.originalFormData
//     ? global.originalFormData
//     : global.FormData;
// }
//
// if (Config.ENV === 'development') {
//   enableHttpDebugging();
// }

AppRegistry.registerComponent(appName, () => App);
