import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header, List, Profile, Gap } from '../../components'
import { colors, getData } from '../../utils'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = React.useState({
    fullName: '',
    profession: ''
  })

  React.useEffect(() => {
    getData('user')
      .then(res => {
        const data = res
        data.photo = {uri: res.photo}
        setProfile(data)
      })
  }, [])

  const signOut = () => {
    Fire.auth().signOut()
      .then(res => {
        console.log('sukes',res)
        navigation.replace('GetStarted')
      }).catch(err => {
        console.log(err)
        showMessage({
          message: 'Masukkan password lebih dari 6 karakter',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      })
  }

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 &&
        <Profile 
          name={profile.fullName} 
          desc={profile.profession} 
          photo={profile.photo}
        />
      }
      <Gap height={14} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <List 
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <List 
          name="Language"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-profile"
        />
        <List 
          name="Give us Rate"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-profile"
        />
        <List 
          name="Sign Out"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-profile"
          onPress={signOut}
        />
        <Gap height={14} />
      </ScrollView>
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
