import { TextInput } from "react-native"
import React, {useState} from "react"

const Input = () => {
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    return(
        <TextInput/>
    )
}

export default Input