import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../components/AppHeader'
import { AntDesign } from '@expo/vector-icons'; 

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{textAlign: 'center', fontSize: 40}}> <AntDesign name="facebook-square" size={94} color="lightblue" /> </Text>
        </View></View>
      );
    }
  }
