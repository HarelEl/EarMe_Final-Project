import React,{ useState ,useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

//LogBox.ignoreLogs(['Setting a timer']); /// unfreeze for running on phones

class UserHomePage extends React.Component {
    constructor(){
        super()
        this.state={
            Username:null,
            isLoaded:false
        }
    }
    render(){
            return (
                <View style={styles.screen}>
                    <Text>UserHomePage Profile Screen</Text>
                </View>   
            );
        }
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding : 25,
        alignItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonContainer:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        paddingBottom: 10 ,
        paddingTop: 10,
        borderRadius: 10,
        color: 'red'
    }
})



export default UserHomePage;