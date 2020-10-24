import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, ILHospitalBG } from '../../assets'
import { ListHospitals } from '../../components'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
  return (
    <View style={styles.page}> 
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals 
          type="Rumah sakit" 
          name="Citra Bunga Merdeka" 
          address="Mahogany" 
          pic={DummyHospital1} 
        />
        <ListHospitals 
          type="Rumah sakit" 
          name="Citra Bunga kurang Merdeka" 
          address="Raffles" 
          pic={DummyHospital1} 
        />
        <ListHospitals 
          type="Rumah sakit" 
          name="Mellia" 
          address="Cibubur" 
          pic={DummyHospital1} 
        />
      </View>
    </View>
  )
}

export default Hospitals

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },  
  background: {
    height: 240,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center'
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14
  },  
})
