import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'
import DarkProfile from './DarkProfile'

const Header = (props) => {
  if(props.type === 'dark-profile') {
    return <DarkProfile onPress={props.onPress} />
  }
  return (
    <View style={styles.container(props.type)}>
      <Button 
        type='icon-only' 
        icon={props.type === 'dark' ? 'back-light' : 'back-dark'} 
        onPress={props.onPress} 
      />
      <Text style={styles.text(props.type)}>{props.title}</Text>
      <Gap width={24} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary
  })
})
