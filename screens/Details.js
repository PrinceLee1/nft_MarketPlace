import { Text, SafeAreaView, StatusBar, Image, FlatList, View } from 'react-native';
import { COLORS, FONTS, SIZES, assets, SHADOWS } from '../constants';
import { CircleButton, FocusedStatusBar, SubInfo, RectButton, DetailsDesc, DetailsBid } from '../components';
import React from 'react';

const DetailsHeader = ({ data, navigation }) => {
  return (
  <View style={{
    width: '100%',
    height: 373
  }}>
    <Image
    source={data.image}
    resizeMode= 'cover'
    style={{
      width: "100%",
      height: "100%"
    }}
    />
    <CircleButton
    imgUrl={assets.left}
    handlePress={ () => navigation.goBack()}
    />
  </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
   <SafeAreaView style={{ flex: 1}}>
    <FocusedStatusBar
    barStyle = 'dark-content'
    backgroundColor = 'black'
    translucent={true}
    />
    <View style={{
      width: '100%',
      position: 'absolute',
      bottom: 0,
      paddingVertical: SIZES.font,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(225, 225, 255, 0.5)',
      zIndex: 1
    }}>
      <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
    </View>
    <FlatList
    data={data.bids}
    renderItem={({ item }) => <DetailsBid bid={item} />}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
    ListHeaderComponent={() => (
      <React.Fragment>
        <DetailsHeader data={data} navigation={navigation} />
      </React.Fragment>
    )}
    />
   </SafeAreaView>
  )
}
 
export default Details