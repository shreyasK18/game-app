import React from 'react'
import { StyleSheet, Text, View, TextInput,Button, ImagePropTypes } from 'react-native';

const Card = ({style,children}) => {
    return (
    <View style={{...styles.card,...style}}>{children}</View>
    )
}
const styles=StyleSheet.create({
 card:{
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowRadius:0.26,
    elevation:8,
    backgroundColor:'white',
    padding:20,
    borderRadius:10,
 }
})
export default Card
