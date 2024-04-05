import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ScreenNavigationProp } from '../../types/navigation';

type Props = {
  navigation: ScreenNavigationProp<'WelcomeScreen'>;
}

const WelcomeScreen = (props: Props) => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('HomeScreen');
    }, 3000)
  }, [])
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>WelcomeScreen</Text>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})