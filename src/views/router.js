/**
 * Created by dev on 4/20/17.
 */
import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import { setPath } from '../store/app'

import AboutContainer from './about'
import HomeContainer from './home'
import LogInContainer from './login'

export class Router extends Component {

  constructor(){
    super()
  }
  render() {
    const { path } = this.props
    return (
      <Navigator
        initialRoute = {{ name: 'Login', title: 'Login' }}
        renderScene = { this.renderScene }
        navigationBar = {
          path !== 'Login' &&
          <Navigator.NavigationBar
            style = { styles.navigationBar }
            routeMapper = { NavigationBarRouteMapper }
          />
        }
      />
    )
  }
  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return (
        <HomeContainer
          navigator = {navigator}
          {...route.passProps}
        />
      )
    }
    if(route.name == 'About') {
      return (
        <AboutContainer
          navigator = {navigator}
          {...route.passProps}
        />
      )
    }

    if(route.name == 'Login') {
      return (
        <LogInContainer
          navigator={navigator}
          {...route.passProps}
        />
      )
    }

  }
}

Router.propTypes = {
  path: PropTypes.string
}

export default connect((state) => {
  return {
    path: state.app.path
  }
})(Router)

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableOpacity
          onPress = {() => {
            if (index > 0) {
              navigator.pop()
              console.info(navigator.getCurrentRoutes())
            }
          }}>
          <Text style={ styles.leftButton }>
            Back
          </Text>
        </TouchableOpacity>
      )
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.openMenu) return (
      <TouchableOpacity
        onPress = { () => route.openMenu() }>
        <Text style = { styles.rightButton }>
          { route.rightText || 'Menu' }
        </Text>
      </TouchableOpacity>
    )
  },
  Title(route, navigator, index, navState) {
    return (
      <Text style = { styles.title }>
        {route.title}
      </Text>
    )
  }
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: 'blue',
  },
  leftButton: {
    color: '#ffffff',
    margin: 10,
    fontSize: 17,
  },
  title: {
    paddingVertical: 10,
    color: '#ffffff',
    justifyContent: 'center',
    fontSize: 18
  },
  rightButton: {
    color: 'white',
    margin: 10,
    fontSize: 16
  }
})