import React from 'react';
import { View, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';

const CustomSignIn = () => {
  
    const navigation= useNavigation();


  const handleSocialSignIn = async (provider) => {
    try {
      await Auth.federatedSignIn({ provider });
      navigation.navigate('Properties');
      console.log('success');
      
      
      
    } catch (error) {
      console.log('Error signing in with social provider:', error);
    }
  };

  return (
    <View>
      {/* Social sign-in buttons */}
      <Button title="Sign In with Google" onPress={() => handleSocialSignIn('Google')} />
      <Button title="Sign In with Facebook" onPress={() => handleSocialSignIn('Facebook')} />
      {/* Add more social sign-in buttons as needed */}
    </View>
  );
};

export default CustomSignIn;