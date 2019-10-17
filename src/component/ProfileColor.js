import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,ImageBackground} from 'react-native';
import styles from './StyleProfile';

export default class ProfileColor extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../assets/bg.jpg')}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardImageContainer}>
                            <Image style={styles.cardImage} source={require('../assets/user.png')}/>
                        </View>
                        <Text style={styles.cardName}>Yosua bersama Doa Ibu</Text>
                        <View style={styles.cardOccupationContainer}>
                            <Text style={styles.cardOccupation}>React Native Developer</Text>
                        </View>
                        <View>
                            <Text style={styles.cardDescription}>Yosua is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}