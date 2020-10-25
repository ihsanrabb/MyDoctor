import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyDoctor2, IconNext } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={props.profile} style={styles.avatar} />
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

export default ListDoctor

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
    flex: 1
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 16
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
