/**
 * Created by dev on 4/21/17.
 */
/**
 * Created by dev on 4/20/17.
 */
import React, {Component, PropTypes} from 'react'
import {
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'
import {connect} from 'react-redux'

import {setPath} from '../store/app'
import { colors } from '../constants'

export class LoginContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: colors.heartRed}}
      >
        {/*<Image
          source={require('../resources/img/background.jpg')}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        />*/}
        <View
          style={{
            flex: 1.61,
            flexDirection: 'row'
          }}
        >
          <View
            style={{flex: 0.25}}
          />
          <View
            style={{
              flex: 1.61,
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <Image
              source={require('../resources/img/mark.png')}
              style={{ marginBottom: 40 }}
            />

            <TextInput
              style={{
                height: 40,
                borderWidth: 0.5,
                borderColor: 'white',
                borderRadius: 20,
                padding: 10,
                color: 'white',
                opacity: 0.8
              }}
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              style={{
                height: 40,
                borderWidth: 0.5,
                borderColor: 'white',
                marginTop: 10,
                marginBottom: 16,
                borderRadius: 20,
                padding: 10,
                color: 'white',
                opacity: 0.8
              }}
              placeholder="Password"
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
            />
          </View>
          <View
            style={{flex: 0.25}}
          />

        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row'
          }}>

          <View style={{flex: 0.25}}/>
          <View
            style={{
              flex: 1.61,
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20
              }}
            >
              <Text
                style={{fontSize: 12, textAlign: 'right', color: 'white'}}
              >
                Forgot Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'white',
                borderColor: 'white',
                borderRadius: 20,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 15,
                paddingRight: 15,
              }}
            >
              <Text
                style={{fontSize: 16, textAlign: 'center', color: colors.heartRed}}
              >
                LOGIN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 20
              }}
            >
              <Text
                style={{fontSize: 16, textAlign: 'center', color: 'white'}}
              >
                I don't have an account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.25}}/>
        </View>
      </View>
    )
  }

  handleLogin() {

  }
}

LoginContainer.propTypes = {
  setPath: PropTypes.func
}

export default connect((state) => {
  return {
    path: state.app.path
  }
}, {setPath})(LoginContainer)
