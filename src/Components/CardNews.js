import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function CardNews() {

    const [formulario, setFormulario] = useState({
        nome:"",
        email:"",
        senha:"",
        senha1:"",
        cpf:""
    });

    const handleSubmit = () => {

        //Validação de formulario
        if(!formulario.nome || 
            !formulario.email || 
            !formulario.senha || 
            !formulario.senha1 || 
            !formulario.cpf ) {
            alert("Por favor, preencha o campo que está faltando.")
            return;
        }

        if(formulario.senha != formulario.senha1){
            alert("Verifique sua senha.")
            return;
        }


    





        // Aqui voce pode lidar com o envio dos dados
        console.log("Nome:", formulario.nome);
        console.log("Email:", formulario.email);
        console.log("CPF:", formulario.cpf)
        console.log("Senha", formulario.senha);
        console.log("Senha confirmada:", formulario.senha1)


        setFormulario({
            nome:'',
            email:'',
            senha:'',
            senha1:'',
            cpf:''
        })

    }


  return (
    <View style={style.container}>
        <TextInput style={style.input} placeholder='Digite seu nome...' 
        value={formulario.nome}

        // permite a alteracao no campo "digite seu nome"
        onChangeText={(texto) => setFormulario({...formulario, nome:texto})}
        />

        <TextInput style={style.input}
        placeholder='Digite seu email...'
        value={formulario.email}
        onChangeText={(texto) => setFormulario({...formulario, email: texto}) }
        />

        <TextInput style={style.input}
        placeholder='Digite seu cpf...'
        value={formulario.cpf}
        maxLength={11}
        onChangeText={(texto) => setFormulario({...formulario, cpf: texto}) }
        />

        <TextInput style={style.input}


        placeholder='Digite sua senha...'
        value={formulario.senha}
        maxLength={15}
        onChangeText={(texto) => setFormulario({...formulario, senha:texto})}

        //esconde a senha e aparece o teclado.
        secureTextEntry={true}
        />

        <TextInput style={style.input}


        placeholder='Confirme sua senha...'
        value={formulario.senha1}
        maxLength={15}
        onChangeText={(texto) => setFormulario({...formulario, senha1:texto})}

        //esconde a senha e aparece o teclado.
        secureTextEntry={true}
        />
    


        <Button 
        title="Enviar"
        onPress={handleSubmit}
        />

        
        {formulario.nome && formulario.email && formulario.senha && formulario.senha1 && formulario.cpf &&  (
            <Text>
                Nome: {formulario.nome}, 
                email:{formulario.email}, 
                senha:{formulario.senha}, 
                senha1:{formulario.senha1}, 
                cpf:{formulario.cpf}
                {/* Adicionando uma máscara para senha */}
                Nova senha: {'*'.repeat(formulario.senha.length)}
                senha1: {'*'.repeat(formulario.senha1.length)}
            </Text>
        )}


    </View>
  )

}

const style = StyleSheet.create({
    container:{
        padding:20,
    },
    input:{
        height:40,
        borderColor:'gray',
        borderWidth: 1,
        marginBottom:12,
        paddingLeft:8
    }
})
