import React from 'react'
import { View,Text, Button, StyleSheet, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';
const GameOverScreen = props => {
    return (
       <View style={styles.screen}>
           <TitleText> The Game is Over !</TitleText>
           <View style={styles.imageContainer}>
            <Image style={styles.image}
              fadeDuration={1000}
            source={require('../assets/success.png')}
            //  source={{uri:'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
            resizeMode="cover"/>
           </View>
    <View style={styles.resultContainer}>
    <BodyText style={styles.resultText}> Your phone needed 
        <Text style={styles.highlight}>
            {' '}
             {props.roundsNumber} 
             {' '}
        </Text> 
            rounds to guess the number 
        <Text style={styles.highlight}>
            {' '}
             {props.userNumber} 
             {' '}
        </Text> 
    </BodyText>
    </View>
    
    
    <MainButton onPress={props.onRestart}>
        New Game
    </MainButton>
       </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:200,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30,
    },
    image:{
        width:'100%',
        height:'100%',
        
    },
    highlight:{
        color:Colors.primary,
        fontFamily:'open-sans-bold',
        
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical:15
        // width:'80%',
    },
    resultText:{
        textAlign:'center',
    

    }
});
export default GameOverScreen
