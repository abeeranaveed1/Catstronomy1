import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import {firebase} from '../../config'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Dashboard = ({navigation}) => {
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
    <View style={{backgroundColor:'#ffccd4'}}>
      <View style={{height:hp(10), alignContent:'center', justifyContent:'center'}}>
        <Text style={{fontSize:30, textAlign:'center'}}> Catstronomy </Text></View>
     
     <View style={{ height:hp(35), flexDirection:'row', justifyContent:'space-evenly'}}>
     <View style={{backgroundColor:'#99bbff', height:hp(30), width:wp(45), alignSelf:'center'
    ,borderRadius:35, marginLeft:4,
    shadowOffset: {width: -50, height: 3},  
    shadowColor: 'blue',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 25}}> 
      <TouchableOpacity onPress={()=>navigation.navigate('Cat Profile')}>
         <Image source={require('../logos/CatProfile.png')} style={{alignSelf:'center',height:hp(20),width:wp(30)}}/>
         <Text style={{textAlign:'center',fontSize:20, fontFamily:'sans-serif',fontWeight:'bold', color:'#001a4d'}}> Cat Profile </Text>
         </TouchableOpacity>
      </View>
      <View style={{ height:hp(30), width:wp(50),alignSelf:'center',justifyContent:'space-evenly'}}>
      <View style={{backgroundColor:'#ffe6e9', height:hp(12), width:wp(50),borderRadius:35,flexDirection:'row',alignContent:'center'
    ,justifyContent:'center',shadowOffset: {width: -50, height: 3},  
    shadowColor: '#ff0026',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 25}}>
   
      <TouchableOpacity onPress={()=>navigation.navigate('Locate Vets')}>
      <Image source={require('../logos/location.png')} style={{width:wp(10), height:hp(10), alignSelf:'center'}}/>
      <Text style={{ alignSelf:'center', color:'#ff8093', fontSize:16, fontFamily:'sans-serif',fontWeight:'bold'}}> Locate Vets </Text>
      </TouchableOpacity>
      
      </View>
      <View style={{backgroundColor:'#ffaa80',height:hp(12), width:wp(50),borderRadius:35,flexDirection:'row',alignContent:'center',justifyContent:'center',
    shadowOffset: {width: -5, height: 3},  
    shadowColor: '#802b00',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 30}}>
    <TouchableOpacity onPress={()=>navigation.navigate('FAQ')}>
      <Image source={require('../logos/faq-icon.png')} style={{width:wp(13), height:hp(8), alignSelf:'center'}}/>
      <Text style={{alignSelf:'center',marginLeft:5, color:'#802b00', fontSize:16,fontWeight:'bold'}}> FAQ </Text>
      </TouchableOpacity>
      
      </View>
      </View>
     </View>
     <View style={{width:wp(100), height:hp(44), justifyContent:'space-evenly', alignContent:'center'}}> 
     <View style={{backgroundColor:'#66CDAA',width:wp(90), height:hp(15), alignSelf:'center',borderRadius:35,flexDirection:'row', justifyContent:'center',
    shadowOffset: {width: -5, height: 3},  
    shadowColor: 'green',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 30}}>
      
     <Image source={require('../logos/breed1.png')} style={{width:wp(30), height:hp(15), alignSelf:'center'}}/>
     <Text style={{alignSelf:'center', fontSize:24,fontWeight:'bold',color:'#194d3c'}}> Breed Detection </Text>

     
     </View>
     <View style={{backgroundColor:'#e6dd7f',width:wp(90), height:hp(15),alignSelf:'center',borderRadius:35,flexDirection:'row', justifyContent:'center',
    shadowOffset: {width: -5, height: 3},  
    shadowColor: 'orange',  
    shadowOpacity: 0.2,  
    shadowRadius: 1, elevation: 30}}>
     
     <Image source={require('../logos/breed.png')} style={{width:wp(30), height:hp(15), alignSelf:'center'}}/>
     <Text style={{alignSelf:'center', fontSize:24,fontWeight:'bold',color:'#6a6315'}}> Mood Detection </Text>
   
     </View>

     </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})