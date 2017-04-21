/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Provider } from 'react-redux'

import store from './src/store'
import Router from './src/views/router'

export default class ImageTinder extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ImageTinder', () => ImageTinder)
