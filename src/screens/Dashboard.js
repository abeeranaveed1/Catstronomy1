import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {firebase} from '../../config'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Dashboard = (navigator) => {
   const [name,setName] = useState('')

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
      <SafeAreaView>
        <Text> Welcome {name.firstName}</Text>
      <TouchableOpacity onPress={()=> {firebase.auth().signOut()}}>
      <Text> Logout </Text>
      </TouchableOpacity>
      
      </SafeAreaView>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})