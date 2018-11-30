import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class from extends React.Component{
    render(){
        return{
            <View style ={styles.fromContainer}>
            <TextInput
            placeholder='USERNAME'
            placeholderTextColor='#292929'
            style ={styles.TextInput}
            underlineColorAndroid={'transparent'}/>

            <TextInput
            placeholder ='PASSWORD'
            placeholderTextColor='#292929'
            secureTextEntry ={true}
            style ={styles.TextInput}
            underlineColorAndroid={'transparent'}/>

            <TouchableOpacity style={styles.button}>
            <Text style ={styles.btntext}>Login
            </Text>
             </TouchableOpacity>
            </View>
        };
    }
}

const styles = StyleSheet.create({
    fromContainer:{
        alignSelf :'stretch',
        padding:20,
        backgroundcolor :'#fff',
    },
    TextInput:{
        alignSelf : 'stretch'
        padding: 20,
        backgroundcolor : 'rgba (255 ,255,255,0.8)',
        marginBottom : 20 ,
     },
    button:{
        alignSelf:'stretch',
        marginTop:20,
        backgroundcolor: 'rgba (0,0,0,0.8)',
        alignItem: 'center',
        padding : 20,
    },
    btntext:{
        color:'#fff',
        fontSize:
    }

});