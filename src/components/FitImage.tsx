import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

const FitImage = ({src}: any) => {
    const width= Dimensions.get('window').width;
    const ratio = 1080 / width;
    const height = 607 / ratio;
  return (
    <View>
      <Image style={{width: width, height: height }} source={{
        uri: src
      }}></Image>
    </View>
  )
}

export default FitImage;