import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params
  
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile 
          name={dataDoctor.data.fullName} 
          desc={dataDoctor.data.profession} 
          photo={{uri: dataDoctor.data.photo}}  
        />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
        <ProfileItem label="Tempat Praktik" value={dataDoctor.data.hospital_address} />
        <ProfileItem label="NO. STR" value={dataDoctor.data.str_number} />
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
