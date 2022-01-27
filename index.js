/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import DefaultApp from "./src/default/DefaultApp";

AppRegistry.registerComponent(appName, () => DefaultApp);
