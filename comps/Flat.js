import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bs } from '../styles/bsStyles'
export default function Flat() {
  return (
    <View style={styles.container}>
      <Text style={[bs.h2]}>Flat</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8
  }
})
const cars_ar = [
  {name:"Toyota",color:"blue",id:1},
  {name:"Bmw",color:"red",id:2},
  {name:"Mazda",color:"silver",id:3},
  {name:"Tesla",color:"black",id:4},
  {name:"Honda",color:"silver",id:5},
  {name:"Toyota",color:"blue",id:6},
  {name:"Bmw",color:"red",id:7},
  {name:"Mazda",color:"silver",id:8},
  {name:"Tesla",color:"black",id:9},
  {name:"Honda",color:"silver",id:10},
  {name:"Toyota",color:"blue",id:11},
  {name:"Bmw",color:"red",id:12},
  {name:"Mazda",color:"silver",id:13},
  {name:"Ferrari",color:"green",id:14},
  {name:"Opel",color:"gold",id:15},
]