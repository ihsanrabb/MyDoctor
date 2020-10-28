import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser, IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderProfile}>
        <Image source={DummyUser} style={styles.avatar} />
        {props.isRemove && <IconRemovePhoto style={styles.removePhoto} />}
      </View>
      {props.name && 
        <>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.profession}>{props.desc}</Text>
        </>
      }
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },  
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2
  },
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    alignItems: 'center'
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    alignItems: 'center'
  },
  removePhoto: {
    position: 'absolute',
    right: 4,
    bottom: 4
  }
})
