import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-web'






const ForgetPassword = () => {
  
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Forget Password</Text>
      <Text style={styles.subtitle }> enter your email adress below and will send you an email with instruction  on how to change your password </Text>
      <View>
        <TextInput placeholder='enter your email ' style={styles.TextInput} />
        </View>

        <TouchableOpacity>
          <View style={styles.button} >
            <Text style={styles.buttonText} >send</Text>
          </View>
          </TouchableOpacity>
          
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({

  container:{
    paddingHorizontal:20,
    paddingTop:20
  },
  title:{
    fontWeight:'bold',
    color:'#4d4dff',
    fontSize:40,
    marginVertical:10
  },
  subtitle:{
    fontWeight:'500',
    color:'#4d4dff'

  },
  TextInput:{
    fontSize: 20,
    color: '#000',
    borderBottomColor: '#f5487f',
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical:5
  },
  button:{
    backgroundColor: '#f5487f',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10

  },
  buttonText:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'

  }




})