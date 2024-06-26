import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Pressable,TouchableOpacity } from "react-native";
import Input from '../componentes/input';
import Botoncito from '../componentes/preseable';

export default function SettingsScreen() 
{
    const [Name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setemail] = useState('');
    const [userName, setUserName] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');
    //En userName se guarda el valor del inpuy
    //setUserName es para cambiar y actualizar el valor
    //Inicia las dos cosas y los pone vacio por defecto
  const mostraruser = () => {
    console.log ('Name:', Name);
    console.log ('Last Name:', lastName);
    console.log ('Email:', email);
    console.log ('User Name:', userName);
    console.log ('Password:', password);
  //Cuando se hace clic en el boton se llama a esta función y muestra el nombre actual
  if (setNewPassword != setPassword) {
    window.alert("Passwords must match");
  }
}
  return(
     <SafeAreaView style={styles.contenedorPadre}>
        <View style={styles.datos}>
        <Text style ={styles.titulo}>Sign up</Text>
        <Input 
        value = {Name}
        onChangeText ={setName}
        placeholder = 'Name'
        maxLength={15}
        />
        <Input 
        value = {lastName}
        onChangeText ={setLastName}
        placeholder = 'Last Name'
        maxLength={15}
        />
        <Input 
        value = {email}
        onChangeText ={setemail}
        placeholder = 'Email'
        maxLength={20}
        inputMode= 'numeric'
        />
        <Input 
        value = {userName}
        onChangeText ={setUserName}
        placeholder = 'Nickname'
        maxLength={15}
        />
        <Input
        value = {newpassword}
        onChangeText = {setNewPassword}
        placeholder = 'Password'
        maxLength={25}
        secureTextEntry = {true}
        />
        <Input
        value = {password}
        onChangeText = {setPassword}
        placeholder = 'Confirm Password'
        maxLength={25}
        secureTextEntry = {true}
        />
        <Botoncito onPress={mostraruser}> </Botoncito>
        <Text style={styles.WelcAgain}>Welcome {userName}! </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text> Do you already have an account? Log in here </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView> 


);
}

const styles = StyleSheet.create({
    contenedorPadre: {
        flex: 1,
        backgroundColor: '#A46D6D',
      },
      datos: {
        flex: 1,
        marginHorizontal:600,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
      },
      WelcAgain: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: "#6EA46D",
        textShadowColor: '#476446',
        textShadowOffset: {
          width: -1, height: 2
        },
        textShadowRadius: 1,
      },
      titulo: {
        fontSize: 70,
        marginTop: 20,
        color: "#fff",
        textAlign: 'center'
      },
    
    });







