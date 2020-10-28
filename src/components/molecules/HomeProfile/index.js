import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const HomeProfile = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Ihsanuddin</Text>
        <Text style={styles.profession}>CEO</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.primary
  }
})
