import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, Animated, s } from 'react-native';

export default function App() {
  return (
 
    <View style={styles.container}>
     
     <Image source={require("./src/assetes/logo1.png")}/>

      <View style={styles.areatexto}>
   
       <Text style={styles.text1}>Eletro</Text>
       <Text style={styles.text2}>Recycle</Text>
   
      </View>

      <TextInput
      style={styles.input}
      placeholder="Email"
      autoCorrect={false}
      onChangeText={()=> {}}
      placeholderTextColor="#D3D3D3"
      />

      <TextInput
      style={styles.input}
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={()=> {}}
      placeholderTextColor="#D3D3D3"
      secureTextEntry={true}
      />

      <StatusBar style="auto" />
   
      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.registerText}>Criar Conta!</Text>
      </TouchableOpacity>

     </View>

      
  )}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#042131',
    backgroundImage: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areatexto: {
    padding: 20
  },
  text1:{
    color: '#e5e500',
    fontSize: 20  
  },
  text2:{
    color: '#ffffff',
    fontSize: 37,
  },
  input:{
    backgroundColor: '#696969',
    width: '90%',
    marginBottom:15,
    color: '#222',
    fontSize: 20,
    borderRadius: 7,
    padding: 10,
    font: '#e5e500'
  },
  btnSubmit:{
    backgroundColor:'#fff',
    width: '90%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#000000',
    fontSize: 18
  },
  btnRegister:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  registerText:{
    color: 'white',
    fontSize: 15
  }
});