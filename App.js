import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'

import appNavigator from './Navigator'

const App = createAppContainer(appNavigator);

export default App;