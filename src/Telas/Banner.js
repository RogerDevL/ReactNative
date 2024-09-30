import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Banner() {
  return (
    <>
      <View style={styleView.viewOne}>
        <Text style={styleView.textStyle}>SEJA BEM VINDOS A RL STORE</Text>

        

      </View>
    </>
  );
}

const styleView = StyleSheet.create({
    viewOne:{
        backgroundColor:"blue",
        margin:10,
        height:200,
        borderRadius:10
    },
    textStyle:{
        fontSize:17,
        padding:10,
        color:"white",
        textAlign:"center"
    },
})



