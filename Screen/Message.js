import React from "react";
import{MessageStyle} from'../styleingComponent/MessageStyle'
import { Text,Image, ScrollView,View, TouchableOpacity, TextInput,} from "react-native";
import { useNavigation } from "@react-navigation/native";
 export default function Messages(){
    const navigation=useNavigation();
    return(
        <ScrollView>
               <View style={{flexDirection:'row',marginTop:10,}}>
             <TextInput style={{padding:20,borderWidth:1,marginLeft:10,marginRight:10,borderRadius:5,width:300}} placeholder="type message"/>
             <TouchableOpacity style={{fontSize:15, fontWeight:'bold',borderWidth:1,padding:10,backgroundColor:'#ffffff',borderRadius:5}}><Text>SEND</Text></TouchableOpacity>
            </View>

             <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
            <View style={MessageStyle.jemusContent}>
               
                <View>
                <Image source={require('../component/ImageComponent/jemus.jpg')}style={MessageStyle.JemusImage}/>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{marginLeft:10,fontWeight:500}}>Jemus</Text>
                <Text style={{marginLeft:10}}>Thank you! That is Verry Helpfull.</Text>
            </View>
            </View>
            </TouchableOpacity>
            <View style={MessageStyle.jemusContent}>
                <View>
                <Image source={require('../component/ImageComponent/kenny.jpg')}style={MessageStyle.JemusImage}/>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{marginLeft:10,fontWeight:500}}>Will kenny</Text>
                <Text style={{marginLeft:10}}>I know .... I'm trying to get the funds.</Text>
            </View>
            </View>
            <View style={MessageStyle.jemusContent}>
                <View>
                <Image source={require('../component/ImageComponent/shawn.jpg')}style={MessageStyle.JemusImage}/>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{marginLeft:10,fontWeight:500}}>Shawn</Text>
                <Text style={{marginLeft:10}}>I'm looking for tips around capturing the milky                   way. i have a 6D with a 24-100 mm ... </Text>
            </View>
            </View>
            <View style={MessageStyle.jemusContent}>
                <View>
                <Image source={require('../component/ImageComponent/william.jpg')}style={MessageStyle.JemusImage}/>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{marginLeft:10,fontWeight:500}}>William</Text>
                <Text style={{marginLeft:10}}>Wnated to ask if you're available for a portrait                 shoot next week</Text>
            </View>
            </View>
           
        </ScrollView>
    )
 }