import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, showError, storeData, useForm } from '../../utils'
import { useDispatch } from 'react-redux' 

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''})
  const dispatch = useDispatch()

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true})
    Fire.auth().signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        Fire.database().ref(`users/${res.user.uid}/`).once('value')
          .then(resDB => {
            if(resDB.val()) {
              storeData('user', resDB.val())
              navigation.replace("MainApp")
            }
          })
        dispatch({type: 'SET_LOADING', value: false})
      }).catch(err => {
        dispatch({type: 'SET_LOADING', value: false})
        showError(err.message)
      })
  }

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
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
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link 
          title="Create New Account" 
          size={16} 
          align="center" 
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={40} />
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: colors.white
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153
  }
})
