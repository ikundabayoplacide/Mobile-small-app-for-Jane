import React from "react";
import { ImageStyle } from "../styleingComponent/ImageStyle";
import { Image, ScrollView,View } from "react-native";

export default function Imaging(){
    return(
        <ScrollView style={ImageStyle.ImageContent}>
            <Image source={require('../component/ImageComponent/beauty1.jpg')}style={ImageStyle.beautywhole}/>
            <View style={ImageStyle.Images}>
                <Image source={require('../component/ImageComponent/beauty2.jpg')} style={ImageStyle.beauty}/>
                <Image source={require('../component/ImageComponent/beauty3.jpg')} style={ImageStyle.beauty}/>   

            </View>
            <View style={ImageStyle.Images}>
                <Image source={require('../component/ImageComponent/beauty4.jpg')} style={ImageStyle.beauty}/>
                <Image source={require('../component/ImageComponent/beauty5.webp')} style={ImageStyle.beauty}/>   
                
            </View>
            <View style={ImageStyle.Images}>
                <Image source={require('../component/ImageComponent/beauty7.webp')} style={ImageStyle.beauty}/>
                <Image source={require('../component/ImageComponent/beauty6.webp')} style={ImageStyle.beauty}/>   
                
            </View>
            <View style={ImageStyle.Images}>
                <Image source={require('../component/ImageComponent/beauty9.jpg')} style={ImageStyle.beauty}/>
                <Image source={require('../component/ImageComponent/beauty5.webp')} style={ImageStyle.beauty}/>   
                
            </View>
        </ScrollView>
    )
}