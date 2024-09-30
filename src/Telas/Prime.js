import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.titleTop}>Detalhes do Sistema</Text>
      </View>

      <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Lista de compras</Text>
      </View>

      <View>
        <Text style={estilos.descricao}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula
          dui, mollis id nisi non, pellentesque facilisis felis. Integer
          eleifend dolor eget nunc dapibus, nec dapibus augue pellentesque.
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </>
  );
}
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
  },
  titleTop: {
    width: "100%",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
    color: "white",
  },
  listaDescricao: {
    paddingTop: 20,
    fontSize: 15,
    marginLeft: 20,
  },
  nomeLista: {
    fontWeight: "bold",
  },
  descricao:{
    paddingTop:"#00008B",
    color:"black",
    marginLeft:20,
    lineHeight:26,
    marginTop:10
  },
  preco:{
    color:"blue",
    fontWeight: "bold",
    fontSize:26,
    marginTop:8,
    marginLeft:20
  }

});
