import { StyleSheet } from "react-native";
export const chatStyle =StyleSheet.create({
    james:{
        width:40,
        height:40,
        borderRadius:75,
        margin:20,
    },
    fistChat:{
        flex:1,
        alignItems:'flex-end',
        flexDirection:'row'
    },
    messageContent:{
      marginTop:30,
      backgroundColor:'white',
      borderRadius:7,
      marginRight:80
    },
    jane:{
        marginTop:20,
        width:40,
        height:40,
        borderRadius:75,
        right:0,
        position:'absolute',
        marginRight:10,
       
        
    },
    messageContenting:{
        color:'#461959',
        marginTop:30,
        marginRight:50,
    },
    ThankContent:{
        color:'#9A031E',
        fontStyle:'italic',
        marginTop:30,
    },
    ChaThank:{
        flexDirection:'row',
    }
})