import React from 'react';
import { StyleSheet,View, FlatList, Image,TouchableOpacity, Linking,Text} from "react-native";
import { NavigationContainer ,StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';
import albums from './src/json/albums.json';
import { navigationRef } from './RootNavigation';
//import  details from './src/json/details.json';


const Stack = createStackNavigator();

const App = (params) => {
  return (
  
    <NavigationContainer ref={navigationRef}> 
      <Stack.Navigator>
        <Stack.Screen name="instagram" component={AlbumScreen} options={{ 
          headerLeft:()=> 
          <Image style={styles.hl} source={require('./src/img/camera.png')}/> ,
          headerTitleImage:()=>
          <Image style={styles.ht} source={require('./src/img/title.png')}/>,
          headerRight:()=> 
        <TouchableOpacity 
           onPress={() => navigationRef.current?.navigate("Detail",params)}>
            <Image style={styles.hr} source={require('./src/img/share.png')}/>
        </TouchableOpacity>,

        headerTintColor:'#000',
        headerStyle:{backgroundColor:'#fff'},
        headerTitle:(
        <Image style={styles.ht} 
          source={{ uri: albums.albumtitle[0].titleimg}}
           />)
         }}/>

        <Stack.Screen name="Detail" component={DetailScreen} options={{
          headerLeft:()=> 
            <TouchableOpacity 
               onPress={() => navigationRef.current?.navigate("instagram",params)}>
               <Image style={styles.hl} source={require('./src/img/back.png')}/>
            </TouchableOpacity>,

            //headerRight:()=>
            //<View style={style.hr}>
            //<Image style={styles.hr1} source={require('./src/img/vedio.png')}/>,
            //<Image style={styles.hr2} source={require('./src/img/message.png')}/>
            //</View>,
            headerRight: () =>  
            <View style={styles.hr}>
            <Image style={styles.hr1} source = {require('./src/img/vedio.png')}/>
            <Image style={styles.hr2} source= {require('./src/img/message.png')}/>
            </View>,

           title: 'kathchun6201',
           headerTintColor: '#000'
           
        }}/>     
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles =  StyleSheet.create({
  hl:
  {
    width:25,
    height:23,
    left:15
  },
 
  ht:{
    width:110,
    height:35,
    left:5,
    top:10
  
  },
  hr:
  {
    flexDirection:"row",
    width:25,
    height:23,
    right:15
  },
  hr1:
  {
    width:25,
    height:23,
    right:45
  },
  hr2:
  {
    width:25,
    height:25,
    right:25
  }
});

export default App;