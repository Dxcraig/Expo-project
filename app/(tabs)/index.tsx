
import { Button, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView style = {styles.container}>
      <View>
        <Image style={styles.Image} source={require('../../assets/images/logo[1].png')}/>
        <Text style={styles.title}>Get Started</Text>
        <Text style ={styles.subtitle}>"Find your perfect home in minutes with seamless process at Homery"</Text>
        <TouchableOpacity style={styles.log}>
          <Text style = {styles.placeholder}>Continue with Google</Text>
        </TouchableOpacity>
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
    borderRadius: 8
  },
  placeholder: {
    textAlign: 'center'
  }
});
