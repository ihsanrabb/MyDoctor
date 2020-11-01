import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, List, Profile, Gap } from '../../components'
import { colors } from '../../utils'

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name="Ihsanuudin" desc="CEO"/>
      <Gap height={14} />
      <List 
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List 
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
      />
      <List 
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
      />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
})