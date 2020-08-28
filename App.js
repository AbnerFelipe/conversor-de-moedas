import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=005f38d76ce57efc7c81
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
