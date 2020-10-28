import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { colors, fonts } from '../../../utils'

const List = (props) => {
  const Icon = () => {
    switch(props.icon) {
      case 'edit-profile' :
        return <IconEditProfile />
      case 'language':
        return <IconLanguage />
      case 'rate':
        return <IconRate />
      case 'help':
        return <IconHelp />
      default: 
      return <IconEditProfile />
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.type ? <Icon /> : <Image source={props.profile} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
      {
        props.type == 'next' && <IconNext />
      }
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    marginLeft: 16
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary
  }
})
