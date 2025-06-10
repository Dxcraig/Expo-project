import { StyleSheet, TextInput, View ,Text} from "react-native"
import React, {useState} from "react"

const Input = (text) => {
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return(
        <View style = {styles.view}>
            <Text style ={styles.text}>{text}</Text>
            <TextInput style ={styles.input}/>
        </View>
        
    )
}

export default Input

const styles = StyleSheet.create({
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
   text: {
    color: '#11042F'
  }
})