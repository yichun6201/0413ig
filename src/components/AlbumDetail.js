import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: album.thumbnail_image}}/>

          <View style={styles.headerContentStyle}>
            <Text style={styles.w}>{album.title}</Text>
          </View>
          
          <Image
            style={styles.icon3Style}
            source={{uri: album.more_image}}/>
        </View>

        <View style={styles.cardSectionStyle}>
       
            <Image
              style={styles.imageStyle}
              source={{uri: album.image}}/>

        </View> 

        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.icon4Style}
            source={{uri: album.like_image}}/>
          <Image
            style={styles.icon5Style}
            source={{uri: album.massage_image}}/>
           <Image
            style={styles.icon6Style}
            source={{uri: album.share2_image}}/>
           <Image
            style={styles.icon7Style}
            source={{uri: album.collect_image}}/>
        </View>

        <View style={styles.Content1Style}>
            <Text style={styles.w}>{album.likes}</Text>
        </View>
        <View style={styles.Content1Style}>
            <Text style={styles.w}>{album.content1}</Text>
            <Text style={styles.t}>{album.content2}</Text>
        </View>

      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 40,
    width: 40,
    margin: 5
  },
  icon3Style: {
    height: 25,
    width: 25,
    marginLeft: 208,
    marginTop: 18
  },
  icon4Style: {
    height: 23,
    width: 23,
    marginLeft: 15,
    marginTop: 5
  },

  icon5Style: {
    height: 23,
    width: 23,
    marginLeft: 15,
    marginTop: 5
  },
  icon6Style: {
    height: 23,
    width: 23,
    marginLeft: 15,
    marginTop: 5
  },
  icon7Style: {
    height: 23,
    width: 23,
    marginLeft: 220,
    marginTop: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 5,

  },
  cardContainerStyle: {
    flexDirection:"column",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#FFF",
    shadowColor: "#FFF",

  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#FFF",
    borderColor: "#FFF",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 350,//image size
    width: null
  },
  Content1Style:{
    flexDirection:"row",
    backgroundColor:"#FFF",
    paddingLeft: 20,
    paddingTop:3,
    paddingBottom:10,

  },
  likes:{
   fontWeight:"bold",
   fontSize:14
    },
    
  w:{
    fontWeight:"bold"
    },
  t:{
    paddingLeft:10,
  }

});

export default AlbumDetail;
