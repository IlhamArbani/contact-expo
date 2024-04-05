import { Button, FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContactCard } from '../../components'
import { useGetContactQuery } from '../../api/contactApi'

const HomeScreen = () => {
  const {data, isLoading}= useGetContactQuery();

  return (
    <View style={styles.container}>
      {
        isLoading ?
        (
          <Text style={{textAlign: 'center'}}>Loading ...</Text>
        ):
        (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ContactCard
                id={item.id}
                firstName={item.firstName}
                age={item.age}
                photo={item.photo}
              />
            )}
          />
        )
      }
      <TouchableOpacity
        style={styles.button}
      >
        <Text
          style={{color: 'white', fontSize: 34}}
        >
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  button: {
    position: 'absolute',
    borderRadius: 200,
    backgroundColor: '#2196F3',
    bottom: 16,
    right: 16,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  }
})