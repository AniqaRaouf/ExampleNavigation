import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function LoginScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Text>Login Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
 export default LoginScreen;