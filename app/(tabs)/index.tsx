
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper';
import React from 'react';


export default function HomeScreen() {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
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
            <TextInput style = {styles.input}/>
          </View>
          <View>
            <Text style = {styles.text}>Phone number</Text>
            <TextInput style = {styles.input}/>
          </View>
          <View style = {styles.view}>
            <Text style = {styles.text}>Password</Text>
            <TextInput style = {styles.input}/>
          </View>
          <View>
            <Text style = {styles.text}>Confirm Password</Text>
            <TextInput style = {styles.input}/>
          </View>
        </View >
        <View>
          <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked);}}/>
        </View>
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
  }
});
