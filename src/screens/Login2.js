import { SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text, Button } from 'react-native'
import React ,{useContext, useState, useRef} from 'react'
import { useTheme, Avatar, RadioButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker'
import theme from '../CustomProperties/Theme';
import {firebase} from '../../config'


const Login2 = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  registerUser = async(email,password,firstName,lastName, gender) =>{
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        firebase.auth().currentUser.sendEmailVerification({
           handleCodeInApp: true,
           url : 'https://catstronomy-c0b63.firebaseapp.com',
        })
        .then(()=>{
          alert("Confirmation email sent")
        }).catch((error)=>{
          alert(error.message)
        })
        .then(()=>{
          firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            firstName,
            lastName,
            email,
            gender, 
            password,
            phoneNumber
          })
        })
        .catch((error)=>{
          alert(error.message)
        })

      })
      .catch ((error => {

      alert(error.message)
      
    }))
    
    if(password === confirmPassword){

    } else{
      alert(error.message)
    }
  }



  //const theme = useTheme();
  const [date, setDate] = useState(new Date())
  const [gender, setGender] = React.useState('first');
  return (
    <View style={{backgroundColor: theme.colors.primary, width: wp(100), height: hp(100),flexDirection:'column',flex:1, justifyContent: 'center'}}>
      <View style={{backgroundColor: theme.colors.secondaryContainer, width: wp(90), borderRadius: 8
    , height: hp(85), alignSelf: 'center', alignItems: 'center', justifyContent: 'space-around'}}>
      
      <Avatar.Icon size={64} icon="account" color='orange' style={{backgroundColor:'grey', marginTop: 5}}/>
      <Text> User Profile </Text>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
      <TextInput style={styles.textformfirst} placeholder="First Name" placeholderTextColor="white"
      autoCorrect={false}
      onChangeText={(firstName)=> setFirstName(firstName)}/>
      <TextInput style={styles.textformSecond} placeholder="Last Name"placeholderTextColor="white"
      autoCorrect={false}
      onChangeText={(lastName)=> setLastName(lastName)}/>
      </View>
      <TextInput style={styles.textform} placeholder="Email Address"placeholderTextColor="white"
      onChangeText={(email)=> setEmail(email)}
      autoCorrect={false}
      autoCapitalize='none'
      keyboardType='email-address'/>
      <TextInput style={styles.textform} secureTextEntry={true} placeholder="Password"placeholderTextColor="white"
      onChangeText={(password)=> setPassword(password)}
      autoCapitalize='none'
      autoCorrect={false} />
      <TextInput style={styles.textform} secureTextEntry={true} placeholder="Retype Password"placeholderTextColor="white"
      onChangeText={(confirmPassword)=> setConfirmPassword(confirmPassword)}
      autoCapitalize='none'
      autoCorrect={false}
      />
      <TextInput style={styles.textformpw} placeholder="Phone Number"placeholderTextColor="white" keyboardType={'number-pad'}
      onChangeText={(phoneNumber)=> setPhoneNumber(phoneNumber)}/>
      <Text style={{}}> Gender </Text>
      <View style={{ flexDirection: 'row', flex: 0.15, justifyContent: 'space-between', alignItems: 'center'}}>
      <Text> Male </Text>
      <RadioButton
        value="Male"
        status={ gender === 'Male' ? 'checked' : 'unchecked' }
        onPress={() => setGender('Male')}
        uncheckedColor={theme.colors.primary}
        
      />
      <Text> Female </Text>
      <RadioButton
        value="Female"
        status={ gender === 'Female' ? 'checked' : 'unchecked' }
        onPress={() => setGender('Female')}
        uncheckedColor={theme.colors.primary}
      />
      
      </View>
      <Text> Date of Birth </Text>
      <View style={{width: wp(80), borderRadius: 10}}>
      <Button  color={'grey'} title='Register' 
      onPress={()=> registerUser(email,password,firstName, lastName, gender)}/>
      </View>
    </View>
    </View>
  )
}

export default Login2

const styles = StyleSheet.create({
  textform:{
    border: 'solid', 
    backgroundColor: 'grey', 
    width: wp(80),
    textAlign: 'center',
  },
  textformfirst:{
    width: wp(40),
    borderTopLeftRadius: 8,  
    border: 'solid', 
    backgroundColor: 'grey', 
    margin: 2,
    textAlign: 'center'
  },
  textformSecond: {
    width: wp(40),
    borderTopRightRadius: 8,  
    border: 'solid', 
    backgroundColor: 'grey', 
    margin: 2,
    textAlign: 'center'
  },
  textformpw: {
    width: wp(80),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,  
    border: 'solid', 
    backgroundColor: 'grey', 
    margin: 2,
    textAlign: 'center'
  }
})

  