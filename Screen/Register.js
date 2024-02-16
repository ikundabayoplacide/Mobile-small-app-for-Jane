import React from 'react'
import { sty } from '../styleingComponent/registerStyle';
import { ScrollView, TextInput,Text,TouchableOpacity,View} from 'react-native';


export default function Register(){
  return (
    < ScrollView>
      <View>
      <Text style={sty.RegisterText}>Register</Text>
      <TextInput style={sty.regInput} placeholder='Enter your Email Address' autoCapitalize='none'/>
      <TextInput style={sty.regInput} placeholder='Create Password' secureTextEntry={true} />
      <TextInput style={sty.regInput} placeholder='Comfirm  Password' secureTextEntry={true}/>
      
         <TouchableOpacity>
         <Text style={sty.NextButton}>Submit</Text>
         </TouchableOpacity>
         </View>
      </ScrollView>
  )
  }
