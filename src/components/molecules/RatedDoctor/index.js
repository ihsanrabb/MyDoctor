import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={props.avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.category}>{props.desc}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  )
}

export default RatedDoctor

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center'
  },  
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 16
  },
  profile: {
    flex: 1
  },  
  rate: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2
  }
})
