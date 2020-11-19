import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import BtnIconSend from './BtnIconSend'
import IconOnly from './IconOnly'

const Button = (props)  => {
  if(props.type === 'btn-icon-send') {
    return <BtnIconSend disable={props.disable} onPress={props.onPress} />
  }
  if(props.type === 'icon-only') {
    return <IconOnly icon={props.icon} onPress={props.onPress} />
  }
  if(props.disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{props.title}</Text>
      </View>
    )
  }
  return (
    <TouchableOpacity style={styles.container(props.type)} onPress={props.onPress}>
      <Text style={styles.text(props.type)}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (type) =>  ({
    backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10
  }),
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background
  },
  text: (type) => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text
  }),
  disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.button.disable.text
  },
})
