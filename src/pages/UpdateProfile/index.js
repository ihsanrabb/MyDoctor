import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Profile, Input, Button, Gap } from '../../components'
import { colors } from '../../utils'

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove />
          <Gap height={26} />
          <Input label="Fullname" />
          <Gap height={10} />
          <Input label="Pekerjaan" />
          <Gap height={10} />
          <Input label="Email" />
          <Gap height={10} />
          <Input label="Password" />
          <Gap height={40} />
          <Button 
            title="Save Profile" 
            onPress={() => navigation.goBack('UserProfile')}  
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default UpdateProfile

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
})
