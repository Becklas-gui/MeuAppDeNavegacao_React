import React from 'react';
import { View, Text, Button, TextInput, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

const windowWidht = Dimensions.get('window').width;

export default function LoginScreen ({navigation}) {

    let [login,setlogin] = useState(null);
    let [senha,setsenha] = useState(null);



    const verificarlogin = () => {
        if((login=="user")&&(senha=="1234")){
            navigation.navigate('Home');
        }else{
            alert("Login ou senha errada! Tente ler o texto que aparece quando os campos estão vazios");
        };
    };

    return (
       
        <View style={styles.container }>
            <Text style={styles.title} >Login de usuário</Text>
            <View style={styles.textcontainer}>
                <Text >Login</Text>
                <TextInput style={styles.input} placeholder="Login: user" keyboardType='text' value={login} onChangeText={setlogin}/>
            </View>
            <View style={styles.textcontainer}>
                <Text >Senha</Text>
                <TextInput style={styles.input} placeholder="Senha: 1234" keyboardType='numeric' value={senha} onChangeText={setsenha}/>
            </View>
            <View style={styles.textcontainer}>
            <Button title="Entrar" onPress={verificarlogin}/>
            </View>
        </View>

    );
}


//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidht * 0.5,
        marginLeft: 470,
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#00FFFF',
        margin: 10,
        width: windowWidht * 0.5,
        borderRadius: 500,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5
    },


    textcontainer: {
        width: "60%",
    },

    });
