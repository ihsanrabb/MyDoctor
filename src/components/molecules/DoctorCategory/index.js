import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = (props) => {
  const Icon = () => {
    if(props.category === 'dokter umum') {
      return <ILCatUmum style={styles.illustration} />
    }
    if(props.category === 'psikiater') {
      return <ILCatPsikiater style={styles.illustration} />
    }
    if(props.category === 'dokter obat') {
      return <ILCatObat style={styles.illustration} />
    }
    return <ILCatUmum style={styles.illustration} />
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{props.category}</Text>
    </TouchableOpacity>
  )
}

export default DoctorCategory

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
  },
  illustration: {
    marginBottom: 28
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary
  }
})
