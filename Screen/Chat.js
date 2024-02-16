import React from "react";
import { chatStyle } from "../styleingComponent/Chat";
import { ScrollView, Text,Image, View} from "react-native";
export default function Chat(){
    return(
        <ScrollView>
        <View style={chatStyle.fistChat}>
        <View>
        <Image source={require('../component/ImageComponent/jemus.jpg')} style={chatStyle.james}/>
        </View>
        <Text style={chatStyle.messageContent}>Really i love your most recent photo. I've been                            
        trying to capture the same thing for a few months and would love some tips!</Text>
        </View>
        <View style={chatStyle.secondChat}>
        <View>
        <Image source={require('../component/ImageComponent/jane.jpg')} style={chatStyle.jane}/>
        </View>
        <Text style={chatStyle.messageContenting}>A fast 50 mm like f1.8 would help with the bokeh. I've been using primes as they tend to get a bit sharper images.                       
       </Text>
        </View>
        <View style={chatStyle.ChaThank}>
        <View>
        <Image source={require('../component/ImageComponent/jemus.jpg')} style={chatStyle.james}/>
        </View>
        <Text style={chatStyle.ThankContent}>Thank! That was very helpful!</Text>
        </View>
        </ScrollView>
    )
} 