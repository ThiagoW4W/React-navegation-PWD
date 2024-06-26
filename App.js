import React from "react";
import Navigation from "./navigation";

function App() {
  return (
    <Navigation/>
  );
}

export default App;















/*import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navigation from './navigation';
//import all the components we are going to use
import { StyleSheet, View, Text, SafeAreaView, Pressable,Div} from 'react-native';
import Input from './componentes/input';
import Botoncito from './componentes/preseable';

export default function App (){
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  //En userName se guarda el valor del inpuy
  //setUserName es para cambiar y actualizar el valor
  //Inicia las dos cosas y los pone vacio por defecto
const image = {uri: 'https://imgs.search.brave.com/IkMos1FxQrC6wjyqta6UDlzMEashiamj_zTRplRQ3n4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9odW1h/bmlkYWRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDIvcGVycm8tMy1l/MTU2MTY3OTIyNjk1/My5qcGc'};
const mostraruser = () => {
  console.log ('User Name:', userName);
  console.log ('Password:', password);
//Cuando se hace clic en el boton se llama a esta función y muestra el nombre actual
};
  return (  
    <Router>
      <Switch>
        <Route path='/' Component={Navigation}/>
      </Switch>
    </Router>
  
    <SafeAreaView style={styles.container}>
      
      <View>
        <Text style ={styles.titulo}>Formuario de inicio!</Text>
        <Input 
          value = {userName}
          onChangeText ={setUserName}
          placeholder = 'Nickname'
          maxLength={15}
        />
        <Input
          value = {password}
          onChangeText = {setPassword}
          placeholder = 'Password'
          secureTextEntry = {true}
        />
        <Botoncito
           onPress={mostraruser}>
        </Botoncito>
      <Text style={styles.text}>Bienvenido de nuevo {userName} </Text>
      </View>
      <View style={styles.amor}>
        
      </View>
      
    </SafeAreaView> 
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#222',
  },
  div:{
    borderColor: '#f0f0f0',
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    color: "blue",
  },
  titulo:{
    fontSize: 20,
    marginTop: 20,
    color: "#fff",
    textAlign: 'center'
  },
  image: {

    justifyContent: 'center',
  },
  



});
*/
