import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import { AntDesign } from '@expo/vector-icons';

export default class Searchscreen extends React.Component {
    render() {
      return (
      <View>
        <View>  <AppHeader/> </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
          <Text style={{textAlign: 'center', fontSize: 100}}><AntDesign name="instagram" size={94} color="pink" /></Text>
        </View></View>
      );
    }
  }
