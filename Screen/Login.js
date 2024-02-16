import React from "react";
import { logStyle } from "../styleingComponent/LoginStyle";
import { View,Text,TextInput,TouchableOpacity} from "react-native";
import {useNavigation } from "@react-navigation/native";
export default function Login(){
   const navigation=useNavigation();
    return(
       
        <View>
        <TextInput style={logStyle.logInput} placeholder='Enter your UserName'/>
        <TextInput style={logStyle.logInput} placeholder='Enter Password' secureTextEntry={true}/>
        <TouchableOpacity>
         <Text style={logStyle.NextButton}>Login</Text>
         </TouchableOpacity>
         <Text style={logStyle.condition}>If you don't have account cliick on {''} 
         <TouchableOpacity onPress={()=>navigation.navigate("Register")}> 
              <Text style={logStyle.conditionSignup}>Signup</Text>
         </TouchableOpacity>
         </Text>
        </View>
    )
}