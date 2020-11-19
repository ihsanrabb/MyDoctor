import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = (props) => {
  if(props.disable) {
    <View style={styles.container(props.disable)}>
      <IconSendDark />
    </View>
  }
  return (
    <TouchableOpacity style={styles.container(props.disable)} onPress={props.onPress}>
      <IconSendLight />
    </TouchableOpacity>
  )
}

export default BtnIconSend

const styles = StyleSheet.create({
  container : (disable) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8
  })
})
