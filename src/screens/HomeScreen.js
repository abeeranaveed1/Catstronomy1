import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../CustomProperties/Theme';


const HomeScreen = ( {navigation} ) => {
  return (
    <View style={styles.background}>
        <View style={{alignItems: "center", marginTop: 235, height: hp(500)}}>
          <Text style={{color: 'white'}}> Welcome! (UI is a work in progress!) </Text>
        <View style={[{ width: "100%", margin: 10, border: 'none'}]}> 
      <Button color={theme.colors.primary} title='Login' onPress={()=> navigation.navigate('Login')}/>
      <Button color={theme.colors.primary} title='Register' onPress={()=>navigation.navigate('Login2')}/>
      </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    background:{
      backgroundColor: theme.colors.secondary,
        height: hp(100),
        width: wp(100)
    }

    
    
})