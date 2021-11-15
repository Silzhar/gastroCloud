// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { StyleSheet, Text, View, Image,
  Dimensions, ScrollView } from 'react-native'

const data = 'https://api.spacexdata.com/v3/launches'

const {width} = Dimensions.get('screen')

const ITEM_WIDTH = width * 0.9
const ITEM_HEIGHT = ITEM_WIDTH * 0.9

const Home = () => {
  const tabBarheight = 150
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.scrollContainer}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={[
            styles.scrollContentContainer,
            {paddingBottom: tabBarheight},
          ]}>
          {data.map((item) => (
            <View key={item.id} style={ item.links.mission_patch_small}>
              <Image style={ item.links.mission_patch_small} resizeMode="cover"/>
              <Text style={item.mission_name}>FalconSat</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0f0f',
    },
    contentContainer: {
      marginTop: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    scrollContainer: {
      flex: 1,
    },
    scrollContentContainer: {
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: 14,
    },
    imageCard: {
      borderRadius: 14,
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
    },
  })

export default Home
