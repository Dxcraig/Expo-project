import { TouchableOpacity,Text } from "react-native";


const Button = ({text}) => {
    return(
        <TouchableOpacity style={{backgroundColor: '#7540EE',height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
            <Text style = {{color: 'white', fontWeight: 'bold'}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button