import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {firebase} from './config'
import { createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Login2 from './src/screens/Login2'
import HomeScreen from './src/screens/HomeScreen';
import Dashboard from './src/screens/Dashboard';
import FAQ from './src/drawer-screens/FAQ';
import CatProfile from './src/drawer-screens/CatProfileManagement'
import Vets from './src/drawer-screens/Vets'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Sidebar from './src/Navigation/Sidebar';
import { Provider } from 'react-native-paper';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();




function App(){
const [initialiiazing, setInitializing] = useState(true);
const [user, setUser] = useState();



//handle state change
function onAuthStateChanged(user){
  setUser(user);
  if (initialiiazing) setInitializing(false);
}


useEffect(()=>{
  const person = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  return person;
}, []);

if (initialiiazing) return null;


 if (!user){
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen
      name='Login'
      component={Login}
      />
      <Stack.Screen
      name='Login2'
      component={Login2}/>
    </Stack.Navigator>
  );
 }

 return(
  <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>} initialRouteName='Dashboard'>
        <Drawer.Screen name="Dashboard" component={Dashboard}/>
        <Drawer.Screen name='Cat Profile' component={CatProfile}/>
        <Drawer.Screen 
   name='FAQ' 
   component={FAQ}
   /><Drawer.Screen 
   name='Locate Vets' 
   component={Vets}
   />
      </Drawer.Navigator>);}

export default ()=>{
  return(
    <Provider>
    <NavigationContainer>
      <App/>
    </NavigationContainer>
    </Provider>
  )
}