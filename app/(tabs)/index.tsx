
import { Button, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView style = {styles.container}>
      <View>
        <Image style={styles.Image} source={require('../../assets/images/logo[1].png')}/>
        <Text>Get Started</Text>
      </View>
      
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
    
  }
});
