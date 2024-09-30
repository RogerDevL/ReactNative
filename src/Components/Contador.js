import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from "react-native";


export default function Contador() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');


    useEffect(()=>{
        setMsg('O valor de count foi atualizado ' + count + ' Vezes')

    }, [count])
  return (
    <>
     <Text style ={estilos.texto}>Você clicou aqui {count}</Text>
     <Text>{msg}</Text>


     <View style = {estilos.buttonList}>
        <Button 
        onPress={() =>{
           setCount(count+1)
        }}
        title='Clique aqui'
        />
     </View>

     <View style = {estilos.buttonList}>
        <Button 
        
        onPress={()=>{
            setCount(count - 1)
        //     if (count < 2) {
        //         count == 0  
        //         alert("Nao foi possivel");
        //     }
        }}
        
        title='diminuir' 
        />
     </View>
    </>
   
  )
}

const estilos = StyleSheet.create({
    buttonList:{
        padding:10,
    },
    texto:{
        color:"#CD3333",
        fontWeight:"bold",
        fontSize: 20,
        marginTop:8,
        marginLeft: 20
    }
})
