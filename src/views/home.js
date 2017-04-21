/**
 * Created by dev on 4/20/17.
 */
import React, { Component, PropTypes } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'

import { setPath } from '../store/app'

import HomeButton from './HomeButton'

export class HomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <HomeButton goToAbout = {this.goToAbout}/>
      </View>
    )
  }

  openMenu = () =>{
    alert("Menu button pressed!")
  }

  goToAbout = () => {
    this.props.navigator.push({
      name: 'About',
      title: 'About',
      openMenu: this.openMenu
    });
    this.props.setPath('About')
  }

}

HomeContainer.propTypes = {
  setPath: PropTypes.func
}

export default connect((state) => {
  return {
    path: state.app.path
  }
}, { setPath })(HomeContainer)
