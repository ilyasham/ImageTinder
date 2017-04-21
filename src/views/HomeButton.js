/**
 * Created by dev on 4/20/17.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default HomeButton = (props) => {
  return (
    <View style = {styles.container}>
      <TouchableOpacity
        style = {styles.button}
        onPress = {props.goToAbout}>
        <Text>
          Go To About
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'black'
  }
})