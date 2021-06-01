import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbScreen from './Screens/fbScreen'
import instaScreen from './Screens/instaScreen'
import { AntDesign } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/Ionicons';  

export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  
  FB:{  
        screen:fbScreen,  
        navigationOptions:{  
          tabBarLabel:' ',  
          tabBarIcon:({tintColor})=>(  
            <AntDesign name="facebook-square" size={35} color="lightblue" />
          )  
        }  
      },  
    
  iNSTA:{  
        screen:instaScreen,  
        navigationOptions:{  
          tabBarLabel:' ',  
          tabBarIcon:({tintColor})=>(  
           <AntDesign name="instagram" size={35} color="pink" />
          )  
        }  
      },  
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
