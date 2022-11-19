import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import theme from '../CustomProperties/Theme';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../config'


const Login = () => {
const navigation = useNavigation() 
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const changePassword = () =>{
    firebase.auth().sendPasswordResetEmail(email)
    .then(()=>{
      alert("Password reset email sent")
    }).catch((error) => {
      alert(error)
    })
}



loginUser = async(email,password)=>{
    try {
        await firebase.auth().signInWithEmailAndPassword(email,password)
    } catch (error) {
        alert("Username or password is incorrect");
    }
}





  return (
    <View style={[styles.background, {backgroundColor: theme.colors.primary, shadowOffset: {
        width: wp(0),
        height: hp(12),
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24, shadowColor: theme.colors.primaryContainer}]}> 
    <View style={styles.Body}>
        <Text style={styles.Heading}> Catstronomy </Text>
       <Text style={styles.bodytext}> Login </Text> 
       <View style={styles.LoginForm}> 
       <Text style={styles.formText}> Email Address </Text>
       <View style={styles.inputbox}>
       <TextInput
                style={styles.inputStyle}
                placeholder="Enter Email"
                onChangeText={(email)=> setEmail(email)}
                placeholderTextColor="white"
                autoCapitalize='none'
                autoCorrect={false}
                />
                </View> 
                <Text style={styles.formText}> Password </Text>
       <View style={styles.inputbox}>
       <TextInput
                style={styles.inputStyle}
                placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor="white"
                onChangeText={(password)=> setPassword(password)}
                autoCapitalize='none'
                autoCorrect={false}
                />
                </View> 
        </View>
        <View style={styles.loginButton}>
            <TouchableOpacity 
            onPress={()=> loginUser(email,password)}>
            <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={()=>{changePassword()}}>
        <Text style={styles.forgot}> Forgot password? </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login2')}>
        <Text style={styles.register}> Not registered? Sign-In </Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    Body: {
        borderRadius: 12,
        backgroundColor: 'white',
        height: hp(70),
        width: wp(80),
        marginLeft: 40,
        marginTop: 70 
    },

    bodytext: {
        color: 'blue',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 60,
    },
    inputStyle: {
        flexDirection: 'row',
        fontSize: 10
    },
    inputbox: {
        height: hp(4),
        width: wp(50),
        backgroundColor: 'brown',
        borderRadius: 4,
        marginLeft: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    formText: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left',
        marginLeft: 57
    },

    Heading:{
        textAlign: 'center',
        fontSize: 30,
        marginTop: 40
    },
    
    loginButton: {
        marginTop: 30,
        flextDirecttion: 'row',
        backgroundColor: 'brown',
        width: wp(50),
        justifyContent: 'center',
        marginLeft: 60,
        borderRadius: 4,
        height: hp(4)
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    forgot: {
        textAlign: 'center',
        fontSize: 10,
        marginTop: 6,
        marginRight: 128,
        color: 'blue'
    },
    register: {
        textAlign: 'center',
        fontSize: 10,
        marginTop: 6,
        marginRight: 105,
        color: 'blue'
    },
    background: {
        backgroundColor: '#eab676',
   height: hp(100),
   width: wp(100),
  flexDirection: 'row'
    }

})