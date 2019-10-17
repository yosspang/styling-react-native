import React,{Component} from 'react';
import {View,Image,Text,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import styles from './StyleLogin';

export default class LoginApps extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../assets/bg.jpg')}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/login.jpg')}/>
                    </View>
                    <Text style={styles.loginFont}>Login Apps</Text>
                    <View style={styles.loginContainer}>
                        <Text>User Name</Text>
                        <TextInput style={styles.loginInput}/>
                        <Text style={styles.passwordMargin}>Password</Text>
                        <TextInput style={styles.loginInput}/>
                        <TouchableOpacity style={styles.loginTouchable}><Text>Tampol!</Text></TouchableOpacity>
                    </View>
                    <View style={styles.socialLogoContainer}>
                        <TouchableOpacity style={styles.socialLogoTouchable}>
                            <Image style={styles.socialLogo} source={require('../assets/fb.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialLogoTouchable}>
                            <Image style={styles.socialLogo} source={require('../assets/ig.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialLogoTouchable}>
                            <Image style={styles.socialLogo} source={require('../assets/tw.png')}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}