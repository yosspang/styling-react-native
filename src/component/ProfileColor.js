import React,{Component} from 'react';
import {StyleSheet,View,Image} from 'react-native';
import Style from './Style';

export default class ProfileColor extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage} source={require('../assets/user.png')}/>
                    </View>
                </View>
            </View>
        )
    }
}
const profileCardColor = 'dodgerblue';

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    cardContainer:{
        alignItems:'center',
        borderColor:'black',
        borderWidth:3,
        borderStyle:'solid',
        borderRadius:20, 
        backgroundColor: profileCardColor,
        width:300,
        height:400
    },
    cardImageContainer:{
        alignItems:'center',
        backgroundColor:'white',
        borderWidth:3,
        borderColor:'black',
        width:120,
        height:120,
        borderRadius:60,
        marginTop:30,
        paddingTop:15 
    },
    cardImage:{
        width:80, height:80
    }
});