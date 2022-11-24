import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../CustomProperties/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ( {navigation} ) => {
  return (
    <View style={{backgroundColor:'#f8c8dc', width:wp(100)
    , height: hp(100)}}>
      <View style={styles.chunk}> 
        <Text style={{fontSize:25}}> WELCOME </Text>
        <Text style={{fontSize:25}}> TO </Text>
        <Text style={{fontSize:25, color: '#A6599E'}}> CATSTRONOMY </Text>
        </View>
        <View style={{width:wp(100), height:hp(60)}}>
        <Image source={require('../images/HomeScreenCat.png')} style={{width: wp(90),
        height:hp(50), marginTop:80, marginLeft:100}}/>
        </View>
        <TouchableOpacity style={{backgroundColor:'#ff85a2', width:wp(50), alignSelf:'center', flexDirection:'row',
      height:hp(6), marginTop:3, borderRadius:20}} onPress={()=>navigation.navigate('Login')}>
          <Text style={{alignSelf:'center', color:'white', marginLeft:80}}> Sign In </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    chunk: {
      width: wp(46),
      height: hp(18),
      flexDirection: 'column',
      marginLeft: 10,
      justifyContent: 'space-evenly'
    }

    
    
})