import{StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    bgImage:{
        alignItems:'center',
        height:830,
        width: 500
    },
    logoContainer:{
        alignItems:'center',
        width:200,
        height:120,
        marginTop:20,
        paddingTop:15
    },
    loginFont:{
        fontSize:20,
        marginTop:60
    },
    loginContainer:{
        alignItems:'center',
        marginTop:40
    },
    loginInput:{
        height:60, 
        width:200, 
        marginTop:10, 
        backgroundColor:'white'
    },
    passwordMargin:{
        marginTop:10
    },
    loginTouchable:{
        alignItems:'center',
        marginTop:20, 
        backgroundColor:'aqua', 
        width:70,
        height:30
    },
    socialLogoContainer:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:20,
        marginRight:40,
        marginLeft:40,
        marginBottom:10,
        width:240
    },
    socialLogoTouchable:{
        height:80,width:80
    },
    socialLogo:{
        height:80,width:80
    }
});

export default styles;