import { View, Text, SafeAreaView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import Screens from './Screen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Screens></Screens>
      </NavigationContainer>
    </SafeAreaView>

  )
}

export default App