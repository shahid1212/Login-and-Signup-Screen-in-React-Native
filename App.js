import * as React from 'react';
import { Button, View, Text,StyleSheet,TouchableOpacity,TextInput,ImageBackground }
 from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const image1={uri:"https://images.pexels.com/photos/3585074/pexels-photo-3585074.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"};
const image2={uri:"https://images.pexels.com/photos/3584967/pexels-photo-3584967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}

function LoginScreen( {navigation}) {
  return (

    <View style={styles.container1}>
    <ImageBackground source={image1} style={styles.image}>
    <TextInput placeholder="Email" style={styles.tinput}/>
    <TextInput placeholder="Password" secureTextEntry={true} style={styles.tinput}/>
    <TouchableOpacity>
    <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}>
    <Text>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.signupBtn}>
    <Text onPress={() => navigation.navigate('Signup')}>Signup</Text>
    </TouchableOpacity>
    </ImageBackground>
  </View>

  );
    }
 function SignupScreen(){
  return(
    
  <View style={styles.signupcontainer}>
  <ImageBackground source={image2} style={styles.image}>
  <TextInput placeholder="First Name" style={styles.tinput}/>
  <TextInput placeholder="Last Name" style={styles.tinput}/>
  <TextInput placeholder="Email" style={styles.tinput}/>
  <TextInput placeholder="Phone" style={styles.tinput}/>
  <TextInput placeholder="Password" secureTextEntry={true} style={styles.tinput}/>
  <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.tinput}/>
  <TouchableOpacity style={styles.loginBtn}>
    <Text>Create Account</Text>
    </TouchableOpacity>
      </ImageBackground>
  </View>

  )
}
const Stack = createStackNavigator();

   function NavigatorScreen(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen name="Login" component={LoginScreen}
         options={{
          title: 'LOGIN',
          headerStyle: {
            backgroundColor: '#3b5998',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:'center',
          },
        }}
         />
        <Stack.Screen name="Signup" component={SignupScreen}
        options={{
          title: 'Signup',
          headerStyle: {
            backgroundColor: '#3b5998',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:'center',
          },
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigatorScreen;
const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:"center",
  },
  signupcontainer:{
     flex:1,
    justifyContent:"center",
  },
  tinput:{
  backgroundColor:"white",
  borderRadius: 20,
  justifyContent:"center",
  width: "70%",
  height:50,
  marginBottom:10,
  textAlign:"center",
  marginLeft:60,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft:110,
    color:"white",
    fontWeight:'bold',
  },
loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:100,
    backgroundColor: "#3b5998",
  },
  signupBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft:100,
    marginTop:20,
    backgroundColor: "#3b5998",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})