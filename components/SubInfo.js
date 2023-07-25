import { View, Text } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS, SHADOWS, assets } from '../constants';


export const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  )
}

export const EthPrice = () => {
    return (
      <View>
        <Text>EthPrice</Text>
      </View>
    )
  }
  export const ImageCmp = () => {
    return (
      <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48
      }}
      />
    )
  }
  export const People = () => {
    return (
      <View style={{
        flexDirection: 'row'
      }}>
       {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImageCmp/>
       ))}
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View>
        <Text>Endate</Text>
      </View>
    )
  }

  export const SubInfo = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: 'space-between' 
      }}>
        <People/>
        <EndDate/>
      </View>
    )
  }