
import React,{ useState } from 'react';
import{Image} from 'react-native'
import {styles} from'../styleingComponent/Homestyle';

import { useNavigation } from '@react-navigation/native';

import { Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [name,setName]=useState('Jane');
 const navigation=useNavigation();
  return (
  
    <ScrollView style={styles.container}>
     <View>
     <Image source={require('../component/ImageComponent/jane.jpg')}style={styles.photocover}/>
     </View>
     <View>
      <Text style={{fontSize:30, textAlign:'center'}}>{name} </Text>
      <Text style={{textAlign:'center',fontSize:15, fontWeight:'bold'}}>SAN FRANSISCO, CA</Text>
     </View>

      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.followjane}> Follow Jane</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Messages")}>
      <Text style={styles.message}> MESSAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Images")}>
      <View style={styles.homeImage}>
       
        <View>
       <Image source={require('../component/ImageComponent/beauty1.jpg')} style={styles.beaty}/>
       </View>
       
       <Image source={require('../component/ImageComponent/beauty5.webp')}style={styles.beaty}/>
      </View>
      </TouchableOpacity>
  </ScrollView>

  );
}

