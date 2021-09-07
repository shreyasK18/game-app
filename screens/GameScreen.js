import React,{ useState, useRef, useEffect } from 'react'
import { View,Text, StyleSheet,Button, Alert, ScrollView, FlatList } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import { Ionicons } from '@expo/vector-icons';
const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude){
        return generateRandomBetween(min,max,exclude);

    } else {
        return rndNum;
    }
}
// Scroll View
// const renderListItem = (value,noOfRound)=>(
//     <View key={value} style={styles.listItem}>
//         <BodyText>#{noOfRound} {' '}</BodyText>
        
//         <Text>{value}</Text>
//     </View>
// );
// Flatlist
const renderListItem = (listLength, itemData)=>(
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index} {' '}</BodyText>
        
        <Text>{itemData.item}</Text>
    </View>
);
const GameScreen = props => {
    const initialGuess=generateRandomBetween(1,100,props.userChoice)
    const [currentGuess,setCurrentGuess]=useState(initialGuess);
    const [pastGuesses,setPastGuesses]=useState([initialGuess]);
    const currentLow=useRef(1);
    const currentHigh=useRef(100);
    const { userChoice,onGameOver}=props;

    useEffect(()=>{
     
        if(currentGuess == userChoice){
          
            onGameOver(pastGuesses.length);

        }
    },[currentGuess,userChoice,onGameOver]);
    const nextGuessHandler = direction =>{
        if((direction==='lower' && currentGuess < props.userChoice) || 
        (direction === "greater" && currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie','You Know that this is wrong...',[{text:'Sorry',style:'cancel'}])
            return;
        

        }
        


        if(direction === 'lower'){
       
            currentHigh.current=currentGuess;
    
        } else {
            currentLow.current=currentGuess + 1;
        }
        const nextGuess= generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextGuess);
        // setRounds(rounds=>rounds+1);
        setPastGuesses(curPastGuesses=>[nextGuess.toString(),...curPastGuesses])
    };
    
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton  onPress={nextGuessHandler.bind(this,'lower')}><Ionicons name="md-remove" size={24}/></MainButton>
                <MainButton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="md-add" size={24}/></MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess,index)=> {return renderListItem(guess,pastGuesses.length - index)})}
                </ScrollView>*/}
                <FlatList keyExtractor={(item)=>item} 
                data={pastGuesses} 
                renderItem={renderListItem.bind(this,pastGuesses.length)}
                contentContainerStyle={styles.list}
                />
            </View> 
            
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:350,
        // maxWidth:'80%'
    },
    listContainer:{
        flex:1,
        width:'60%'
    },
    list:{
        flexGrow:1,
        justifyContent:'flex-end',
        // alignItems:'center',
    },
    listItem:{
       borderColor:'#ccc',
       borderWidth:1,
       padding:15,
       marginVertical:10,
       backgroundColor:'white',
       flexDirection:'row',
       width:'100%',
       justifyContent:'space-between'
    }
});

export default GameScreen
