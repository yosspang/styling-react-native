import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class FlexboxRow extends Component {
    render(){
        return(
           
            <View style={{flex:1, flexDirection:'row'}}>          
                <View style={{width:100, height:50, backgroundColor: 'powderblue'}}>
                    <Text>Flexbox Row</Text>
                </View>
                <View style={{width:200, height:50, backgroundColor:'skyblue'}}/> 
                <View style={{width:300, height:50, backgroundColor:'steelblue'}}>
                    <Text>Width 300, height 50</Text>
                </View>
            </View>
            
            /* flexDirection:'values' values bisa diisi dengan
                    row, row-reverse, column, column-reverse
                    row secara horizontal, column secara vertikal.
                    reverse kalau mau dari ujung sebaliknya... misal column-reverse dari bawah memanjang vertikal ke atas 
            */  
        )
    }
}