import React,{ useState } from 'react'

import { StyleSheet, Text, View, TextInput,Button, TouchableWithoutFeedback,Keyboard,Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
const StartGameScreen = props => {
    const [enteredValue,setEnteredValue] =useState('');
    const [confirmed,setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState(0);
    const numberInputHandler=inputText=>{
        
        setEnteredValue(inputText.replace(/[^0-9]/g,'')) }
    const resetInputHandler=()=>{
        setEnteredValue('');
        setConfirmed(false);
    }
    const confirmInputHandler=()=>{
        const chosenNumber=enteredValue;
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number',
                'Number has to be from 1 to 99',
                [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
            )
            return;
        }
       
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }
    let confirmedOutput;
    
    if(confirmed){
        confirmedOutput=<Card style={styles.summaryContainer}>
                            <BodyText>You Have Selected:</BodyText>
                            <NumberContainer >{selectedNumber}</NumberContainer>
                            <MainButton onPress={()=>props.onStartGame(selectedNumber)}> 
                                Start Game
                            </MainButton>  
                        </Card>
    }
    return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
       <View style={styles.screen}>
           <Text style={styles.title}>Start a game Screen</Text>
           <Card style={styles.inputContainer}>
               <BodyText style={styles.text}>Select a number</BodyText>
               <Input blurOnSubmit autoCapitlize='none' value={enteredValue} onChangeText={numberInputHandler} autoCapitlize={false} keyboardType="numeric" maxLength={2} style={styles.input}/>
               <View style={styles.buttonContainer}>
                   <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                   <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler}  color={Colors.primary}/></View>
               </View>
           </Card>
           {confirmedOutput}
       </View>
       </TouchableWithoutFeedback>
    )
}
const styles= StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
        
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold',
        
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'
    },
    inputContainer:{
     width:300,
     alignItems:'center',
     justifyContent:"center",
     

    },
    button:{
        width:100
    },
    input:{
        width:50,
        height:20,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    },
    text:{
        fontFamily:'open-sans',
    }
});
export default StartGameScreen
