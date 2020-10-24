import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = () => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Ihsanuddin',
      desc: 'Baik pak terima kasih...'
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Cima',
      desc: 'Oh tentu saja tidak bisa'
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'gatnes',
      desc: 'au ah elap'
    }
  ])
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {
          doctors.map(doctor => {
            return (
              <ListDoctor 
                key={doctor.id}
                profile={doctor.profile} 
                name={doctor.name} 
                desc={doctor.desc}
              /> 
            )
          })
        }
      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16
  }
})
