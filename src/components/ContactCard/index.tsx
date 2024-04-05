import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Contact } from '../../types/contact'

const ContactCard = (props: Contact) => {
  const {
    firstName,
    age,
    photo,
  } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: photo
        }}
        style={{width: 64, height:64, borderRadius: 64}}
      />
      <View>
        <Text style={{fontSize: 16, fontWeight: '600'}}>{firstName}</Text>
        <Text style={{fontSize: 12, fontWeight: '400'}}>{age}</Text>
      </View>
    </View>
  )
}

export default ContactCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderBottomWidth: 1,
    padding:12,
    borderBottomColor: '#eaeaea'
  }
})