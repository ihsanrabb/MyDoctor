import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile name="Nairobi" desc="Dokter Anak" />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value="UPNVJ" />
        <ProfileItem label="Tempat Praktik" value="Rumah Sendiri" />
        <ProfileItem label="NO. STR" value="0000000123123" />
        <Gap height={33} />
        <View style={styles.action}>
          <Button 
            title="Start Consultation" 
            onPress={() => navigation.navigate('Chatting')}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default DoctorProfile

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  action: {
    paddingHorizontal: 40,
    paddingVertical: 23
  }
})
