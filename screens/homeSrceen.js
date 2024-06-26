import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from '../componentes/input';
import Botoncito from '../componentes/preseable';

function HomeScreen() {
  const image = { uri: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const mostraruser = () => {
    console.log('User Name:', userName);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={styles.contenedorPadre}>
        <View style={styles.datos}>
          <Text style={styles.titulo}>Log in</Text>
          <Input
            value={userName}
            onChangeText={setUserName}
            placeholder='Nickname'
            maxLength={15}
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder='Password'
            maxLength={25}
            secureTextEntry={true}
          />
          <Botoncito onPress={mostraruser} />
          <Text style={styles.WelcAgain}>Welcome Again {userName}! </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text> You do not have an account? Create one here </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedorPadre: {
    flex: 1,
    backgroundColor: '#6D82A4',
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
    textShadowColor: '#4D4D4D',
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

export default HomeScreen;