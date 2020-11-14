import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Profile, Input, Button, Gap } from '../../components'
import { colors, getData, storeData } from '../../utils'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'
import ImagePicker from 'react-native-image-picker'
import { ILNullPhoto } from '../../assets'

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = React.useState({
    fullName: '',
    profession: '',
    email: ''
  })
  const [password, setPassword] = React.useState('')
  const [photo, setPhoto] = React.useState(ILNullPhoto)
  const [photoForDB,setPhotoForDB] = React.useState('')

  React.useEffect(() => {
    getData('user')
      .then(res => {
        const data = res
        setPhoto({uri : res.photo})
        setPhotoForDB(res.photo)
        setProfile(data)
      })
  }, [])

  const update = () => {
    if(password.length > 0) {
      if(password.length < 6) {
        showMessage({
          message: 'Masukkan password lebih dari 6 karakter',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      } else {
        updatePassword()
        updateProfileData()
        // navigation.replace('MainApp')
      }
    } else {
      updateProfileData()
      // navigation.replace('MainApp')
    }
  }

  const updateProfileData = () => {
    const data = profile
    data.photo = photoForDB
    Fire.database().ref(`users/${profile.uid}/`)
      .update(data)
      .then(res => {
        console.log('suskses' ,res)
        storeData('user', data)
      }).catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      })  
  }

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if(user) {
        user.updatePassword(password)
          .catch(err => {
            showMessage({
              message: err.message,
              type: 'default',
              backgroundColor: colors.error,
              color: colors.white
            })
          })
      }
    })
  }

  const changeText = (key,value) => {
    setProfile({
      ...profile,
      [key]: value,
    })
  }

  const getImage = () => {
    ImagePicker.showImagePicker({quality: 0.7, maxWidth: 200, maxHeight: 200}, (response) => {
      console.log(response)
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Oops! anda tidak jadi memilih foto',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      } else {
        setPhotoForDB(`data:${response.type};base64, ${response.data}`)
        const source = { uri: response.uri };
        setPhoto(source)
      }
    })
  }

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile 
            isRemove 
            photo={photo} 
            onPress={getImage}  
          />
          <Gap height={26} />
          <Input 
            label="Fullname" 
            value={profile.fullName} 
            onChangeText={(value) => changeText('fullName', value)}  
          />
          <Gap height={10} />
          <Input 
            label="Pekerjaan" 
            value={profile.profession} 
            onChangeText={(val) => changeText('profession', val)}  
          />
          <Gap height={10} />
          <Input label="Email" value={profile.email} disable />
          <Gap height={10} />
          <Input 
            label="Password" 
            value={password}
            onChangeText={val => setPassword(val)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button 
            title="Save Profile" 
            onPress={update}  
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
