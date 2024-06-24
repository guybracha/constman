import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function MyInput() {
    const onBtnPress = () => {
        console.log("clicked");
    }
  return (
    <View style={styles.container}>
      <Text>Enter your fav color:</Text>
      <TextInput/>
      <Button onPress={onBtnPress} title='click me'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:8
    }
})