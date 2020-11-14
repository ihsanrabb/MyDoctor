import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, List } from '../../components'
import { Fire } from '../../config'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params
  const [listDoctor, setListDoctor] = React.useState([])

  React.useEffect(() => {
    callDoctorByCategory(itemCategory.category)
  }, [])

  const callDoctorByCategory = (category) => {
    Fire.database().ref('doctors/').orderByChild('category').equalTo(category).once('value')
      .then(res => {
        const oldData = res.val()
        const data = []
        Object.keys(oldData).map(item => {
          data.push({
            id: item,
            data: oldData[item]
          })
        })
        setListDoctor(data)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <View style={styles.page}>
      <Header 
        type="dark" 
        title={`Pilih ${itemCategory.category}`} 
        onPress={() => navigation.goBack()}  
      />
      {listDoctor.map(doctor => {
        return (
          <List 
            key={doctor.id}
            type="next"
            profile={{uri: doctor.data.photo}} 
            name={doctor.data.fullName} 
            desc={doctor.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        )
      })}
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white
  }
})
