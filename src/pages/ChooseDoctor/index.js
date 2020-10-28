import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyDoctor3 } from '../../assets'
import { Header, List } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header 
        type="dark" 
        title="Pilih Dokter Anak" 
        onPress={() => navigation.goBack()}  
      />
      <List 
        type="next" 
        profile={DummyDoctor3} 
        name="Ihsanuddin" 
        desc="pria"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List type="next" profile={DummyDoctor3} name="Ihsanuddin" desc="pria"/>
      <List type="next" profile={DummyDoctor3} name="Ihsanuddin" desc="pria"/>
      <List type="next" profile={DummyDoctor3} name="Ihsanuddin" desc="pria"/>
      <List type="next" profile={DummyDoctor3} name="Ihsanuddin" desc="pria"/>
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white
  }
})
