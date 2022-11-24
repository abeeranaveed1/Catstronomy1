import React from 'react';
import Appnavigation from './src/Navigation/navigator'
import ThemeContext from './src/CustomProperties/Theme2';
import theme from './src/CustomProperties/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import {firebase} from './config'
import { createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Login2 from './src/screens/Login2'
import HomeScreen from './src/screens/HomeScreen';
import Dashboard from './src/screens/Dashboard';



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
 <Stack.Navigator>
   <Stack.Screen
   name='Dashboard'
    component={Dashboard}
   />
</Stack.Navigator>
 );

 
  return (
    <ThemeContext.Provider value={theme}>
    <NavigationContainer>
    <Appnavigation/>
    </NavigationContainer>
    </ThemeContext.Provider>
    )
}

//export default App();

export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}