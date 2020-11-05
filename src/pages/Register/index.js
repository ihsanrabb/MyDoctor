import React, { useState } from 'react'
import { ScrollView ,StyleSheet, View } from 'react-native'
import { Button, Header, Input, Gap, Loading } from '../../components'
import { colors, getData, storeData, useForm } from '../../utils'
import { Fire } from '../../config'
import { showMessage, hideMessage } from "react-native-flash-message";

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: ''
  }) 
  const [loading, setLoading] = useState(false)

  const onContinue = () => {
    console.log('masok', form)

    setLoading(true)
    Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        console.log('register success', res)
        setLoading(false)
        setForm('reset')
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email
        }
        Fire.database()
          .ref('users/' + res.user.uid + '/')
          .set(data)
        storeData('user', data)
        navigation.navigate('UploadPhoto')
      })
      .catch((error) => {
        let errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
        console.log('error register', errorMessage)
        setLoading(false)
      });
  }

  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Input 
                label="Full Name" 
                value={form.fullName} 
                onChangeText={(val) => setForm('fullName', val)} 
              />
              <Gap height={24} />
              <Input 
                label="Pekerjaan" 
                value={form.profession}
                onChangeText={(val) => setForm('profession', val)}  
              />
              <Gap height={24} />
              <Input 
                label="Email Address" 
                value={form.email}
                onChangeText={(val) => setForm('email', val)}  
              />
              <Gap height={24} />
              <Input 
                label="Password" 
                value={form.password}
                onChangeText={(val) => setForm('password', val)}  
                secureTextEntry
              />
              <Gap height={40} />
              <Button 
                title="Continue" 
                onPress={onContinue}  
              />
            </View>
          </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  )
}

export default Register

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
