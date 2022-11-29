import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {firebase} from '../../config'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Dashboard = () => {
   const [name , setName] = useState('')

   useEffect(()=>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else{
        console.log("User does not exist")
      }
    })
   }, [])


  return (
    <View>
      <Navbar/>
 
        <Text style={{color:'black', fontWeight:'bold'}}> Welcome {name.firstName} {name.lastName}</Text>
      <TouchableOpacity onPress={()=> {firebase.auth().signOut()}}>
      <Text> Logout </Text>
      </TouchableOpacity>
      
     
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})