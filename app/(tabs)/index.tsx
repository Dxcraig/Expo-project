
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useEffect, useState}from 'react';
import Button from '../../components/Button'


export default function HomeScreen() {
  const getCurrencyExchange = async() => {
    try{
      const response = await fetch('https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR,GBP', {
        method: 'GET',
        headers: {
          'apikey': '9yKVi2qfH6zsaeN7DeGG45ZZdNiRh42F'
        }
      })
      const data = await response.json()
      console.log('my data', data)
    }

    catch(e){
      console.log('error', e)
    }
  }
  const [checked, setChecked] = useState(false);
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  
  useEffect(() => {
    getCurrencyExchange()
  }, [])
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Image style={styles.Image} source={require('../../assets/images/logo[1].png')}/>
        <Text style={styles.title}>Get Started</Text>
        <Text style ={styles.subtitle}>"Find your perfect home in minutes with seamless process at Homery"</Text>
        <View style ={styles.group}>
          <TouchableOpacity style={styles.log}>
            <View style = {styles.contain}>
              <Image style ={styles.logo} source={require('../../assets/images/logos_google-icon--.png')}/>
              <Text style = {styles.placeholder}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.log}>
            <View style = {styles.contain}>
              <Image style ={styles.logo2} source={require('../../assets/images/logo_round-apple.png')}/>
              <Text style = {styles.placeholder}>Continue with Apple</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.line}>
          <View style= {styles.drop}/>
          <Text style = {styles.align}>OR</Text>
          <View style= {styles.drop}/>
        </View>
        <View style ={styles.view}>
          <View>
            <Text style = {styles.text}>Full name</Text>
            <TextInput style = {styles.input} onChangeText={(fullName) => {
              setFullName(fullName)
            }}/>
          </View>
          <View>
            <Text style = {styles.text}>Phone number</Text>
            <TextInput style = {styles.input} onChangeText={(phoneNumber) => {
              setPhoneNumber(phoneNumber)
            }}/>
          </View>
          <View style = {styles.view}>
            <Text style = {styles.text}>Password</Text>
            <TextInput style = {styles.input} onChangeText={(password) => {
              setPassword(password)
            }}/>
          </View>
          <View>
            <Text style = {styles.text}>Confirm Password</Text>
            <TextInput style = {styles.input} onChangeText={(confirmPassword) => {
              setConfirmPassword(confirmPassword)
            }}/>
          </View>
        </View >
        <View style = {styles.check}>
          <TouchableOpacity style={styles.uncheck} onPress={()=>{
            setChecked(!checked)
          }}>
          
            {
              checked && <Image style={{alignSelf:'center'}}source={require('../../assets/images/icons8-done-20.png')}/>
            }
            
          </TouchableOpacity>
          
          <Text style = {styles.terms}>By continuing, you acknowledge that you have read and understood, and agree to Pet Haven <Text style ={styles.bold}>Terms of Services</Text> and <Text style={styles.bold}>Privacy Policy</Text></Text>
        </View>
        <Button text={'Continue'}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    height : 39,
    resizeMode: 'contain',
    alignSelf:'center',
    marginVertical: 30
  },
  container: {
    marginHorizontal: 20,
    flex: 1,

  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500'
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '300',
    marginHorizontal: 40,
    marginTop: 20,
    fontSize: 18
  },
  log: {
    borderWidth: 1,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    marginVertical: 10
  },
  placeholder: {
    fontWeight: '500'
  },
  logo: {
    width: 18,
    height: 18,
  },
  contain: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10,
    alignItems: 'center'
  },
  logo2:{
    width: 24,
    height: 24,
  },
  group: {
    marginVertical: 20
  },
  drop: {
    height:1,
    backgroundColor: '#E1DBF0',
    width: '40%'
  },
  line:{
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  }, 
  align: {
    marginHorizontal: 25
  },
  text: {
    color: '#11042F'
  },
  input: {
    height: 59,
    backgroundColor: '#E8DEFE',
    borderRadius: 8,
    paddingLeft: 20
  },
  view: {
    marginBottom: 20,
    gap: 10
  },
  check: {
    flexDirection: 'row',
    marginBottom: 40,
    gap:10,
  },
  uncheck: {
    backgroundColor: '#E8DEFE',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8
  },
  terms: {
    textAlign: 'center',
    
  },
  bold: {
    fontWeight: 'bold'
  }
});
