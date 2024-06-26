import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import homeScreen from "./screens/homeSrceen";
import settingsScreen from "./screens/settingScreen";

const HomeStackNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ['http://localhost:8081'],
  config: {
    screens: {
      Home: {
        path: 'home',
        screens: {
          LogIn: 'login',
        },
      },
      SignUp: 'signup',
    },
  },
};

function Stacks() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen name="Login" component={homeScreen}options={{
          tabBarLabel: 'Log in',
          headerShown: false,
        }}  />
      <HomeStackNavigator.Screen name="Stack" component={homeScreen}options={{
          tabBarLabel: 'Log in',
          headerShown: false,
        }}  />
    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: '#323030' }}>
      <Tab.Screen 
        name="Home" 
        component={Stacks} 
        options={{
          tabBarLabel: 'Log in',
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="Sign Up" 
        component={settingsScreen} 
        options={{
          tabBarLabel: 'Sign Up',
          headerShown: false,
        }} 
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Cargando...</Text>}
    >
      <MyTabs />
    </NavigationContainer>
  );
}
