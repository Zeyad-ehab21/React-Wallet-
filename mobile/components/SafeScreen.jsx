import { View, Text } from 'react-native'
import React from 'react'

const SafeScreen = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  )
}

export default SafeScreen