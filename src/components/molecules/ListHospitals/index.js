import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListHospitals = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.pic} style={styles.picture} />
      <View>
        <Text style={styles.title}>{props.type}</Text>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </View>
  )
}

export default ListHospitals

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border
  },  
  picture: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6
  }
})
