import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';



class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}> Buzz App </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'brown',
  },
  text:{
    fontFamily: 'Oswald_200ExtraLight',
    color: 'white',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;