import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import Navigator from './src/navigation';
import {Amplify, Auth, API, graphqlOperation} from 'aws-amplify';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports'; 
import AuthContextProvider from './src/context/AuthContext';
import CustomSignIn from './src/components/CustomSignIn';



Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const myFederatedConfig = {
  googleClientId: '824387320753-gdoj2puke3sgn476i8l2ojnvcm486q88.apps.googleusercontent.com',
};

 function App() {
  
 


  useEffect(()=>{



  },[])
  
  return (

    <AuthContextProvider>
    <View style={styles.container}>
      <Navigator />

    
      <StatusBar style="auto" />
    </View>
    </AuthContextProvider>

    // <View style={styles.container}>
    //   <Text>FCM test</Text>
    //   <Text>{newToken}</Text>
    //   <TextInput value={newToken}/>
    //   <StatusBar style="auto" />
    // </View>
  );
}



const signUpConfig = {
  header: "Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    // {
    //   label: "Email",
    //   key: "email",
    //   required: true,
    //   displayOrder: 2,
    //   type: "string",
    // },
    // {
    //   label: "Username",
    //   key: "preferred_username",
    //   required: true,
    //   displayOrder: 3,
    //   type: "string",
    // },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
    },
  ],
};

const customStyles = {...AmplifyTheme, 
  button: {
		backgroundColor: '#512da8',
		alignItems: 'center',
		padding: 16,
	},
  sectionFooterLink: {
		fontSize: 14,
		color: 'black',
		alignItems: 'baseline',
		textAlign: 'center',
	},
  buttonDisabled: {
		backgroundColor: '#cccccc',
		alignItems: 'center',
		padding: 16,
	},

  sectionFooterLinkDisabled: {
		fontSize: 14,
		color: '#8c8c8c',
		alignItems: 'baseline',
		textAlign: 'center',
	},

}

export default withAuthenticator(App, {signUpConfig, theme: customStyles, usernameAttributes: 'email' });



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
