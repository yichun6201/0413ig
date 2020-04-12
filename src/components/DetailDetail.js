import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking,FlatList} from "react-native";

const DetailDetail = ({ album, navigation }) => {
   return (
    
    <View style={styles.D}>

     <View style={[styles.A, styles.E]}>
 

          <Image
            style={styles.avatar}
            source={{uri: album.avatar}}/>

        <View style={styles.Ca}>
        
        <Image
            style={styles.point}
            source={{uri: album.point}}/>

          <Image
            style={styles.camera}
            source={{uri: album.camera}}/>

        </View>


          <View style={styles.Text}>
            <Text style={styles.name}>{album.name}</Text>
            <Text style={styles.meg_a}>{album.message_a}</Text>
            <Text style={styles.meg_b}>{album.message_b}</Text>
          </View>


        <View>  
         <Image
            style={styles.searchbar}
            source={{uri: album.search}}/>
        </View>

     </View>
    </View>

  )};

const styles = StyleSheet.create({
    
  searchbar:{
   flexDirection:"row",
   justifyContent: "flex-start",
    width:350,
    height:35,
    marginTop:25,
    marginLeft:-68
    
  },

  A: {
    flexDirection: "row",
    justifyContent: "flex-start",
    
  },
  avatar: {
    height: 60,
    width: 60,
    margin: 5,
  },
  

  D: {
    flexDirection:"column",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FFF"
  },
  E: {
    padding: 5,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderBottomWidth: 1
  },
  srh:{
    marginLeft: 8,
    marginTop: 8,
    width:350,
    height:35
  },
  point:{
    width:8,
    height:8,
    marginLeft:228,
    marginTop:30

  },
  camera:{
      width:25,
      height:23,
      marginLeft:250,
      marginTop:-18

  },

  Text: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft:-270,
  },
  name:{
    //fontWeight:"bold",
    fontSize:15
    },
  meg_a:{
      marginTop:-20,
      fontSize:15,

      color:"#A9AAAA"
  },
  meg_b:{
    marginTop:-40,
    fontSize:15,

    color:"black"
}
});

export default DetailDetail;
