import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import {ImageBackground} from 'react-native-web'
import Icon from 'react-native-vector-icons/FontAwesome'
const SignUp = () => {


  return (
  <View style={
    styles.container
}>
    <ImageBackground source={
            require('../../assets/background.png')
        }

        style={
            styles.image
    }>


        <ScrollView style={
            styles.scrollView
        }>
            <View style={
                styles.TopContainer
            }>
                <Text style={
                    styles.title
                }>
                   Get satrted
                </Text>
                <Text style={
                    styles.subtitle
                }>
                    Sign Up to continue
                </Text>

            </View>

            <View style={
                styles.DataContainer
            }>
                <TextInput placeholder="Email"
                    placeholderTextColor={"#eee"}
                    style={
                        styles.Input
                    }/>
                <TextInput placeholder="Contact Number"
                    placeholderTextColor={"#eee"}
                    style={
                        styles.Input
                    }/>
                <TextInput placeholder="Password"
                    placeholderTextColor={"#eee"}
                    style={
                        styles.Input
                    }/>
            </View>

            <View style={
                styles.ButtonContainer
            }>
                <TouchableOpacity onPress={
                    () => {}
                }>
                    <View style={
                        styles.Button
                    }>
                        <Text style={
                            styles.ButtonText
                        }>Sign Up</Text>
                    </View>


                </TouchableOpacity>

                <TouchableOpacity onPress={
                    () => {}
                }>
                    <View style={
                        styles.faceBookbtn
                    }>
                        <Icon.Button name='facebook'
                            backgroundColor={'#3b5998'}
                        
                          >
                          <Text  style={
                                styles.ButtonText
                        }>
                            Sign In  with FaceBook
                            </Text>

                        </Icon.Button>
                    </View>

                </TouchableOpacity>
   


            </View>
            <View style={styles.BottomContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.Text}>
                  alredy have an account ? | Sign In . 
                </Text>

              </TouchableOpacity>

            </View>


        </ScrollView>


    </ImageBackground>


</View>
)
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
},

image: {
    flex: 1,
    resizeMode: 'cover'


},
TopContainer: {
    marginTop: 50,
    alignItems: 'center'


},

title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold'
},
subtitle: {
    fontSize: 20,
    color: '#eeeeee',
    marginTop: 10,
    padding: 4
},
DataContainer: {
    marginTop: 50
},
Input: {
    fontSize: 20,
    color: '#eeeeee',
    borderBottomColor: '#f5487f',
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginVertical:5
},
ButtonContainer: {
    marginTop: 50
},
Button: {

    backgroundColor: '#f5487f',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10


},
ButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'


},
faceBookbtn: {

    backgroundColor: '#3b5998',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10


},
Text:{
  color:'#eee',
  marginTop:10,
  fontWeight:600,
  textAlign:'center'

},
BottomContainer:{
  justifyContent:'center',
  marginTop:150
}

})