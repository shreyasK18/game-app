

import React from 'react'

import { StyleSheet, Text, View } from 'react-native';


const Header = ({title}) => {
    return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header:{
      width:'100%',
      height:70,
     paddingTop:10,
      backgroundColor:'#f2787b',
    
      alignItems:'center',
      justifyContent:'center'
    },
    headerTitle:{
    
      color:'black',
      fontSize:18,
      fontFamily:'open-sans-bold',
     
    }
  });
Header.propTypes = {

}

export default Header



