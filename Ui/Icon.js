import { View, Text, Pressable , StyleSheet } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({icon , size, color, onPress}) => {
  return (
  <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
    <View style={styles.container}>
        <Ionicons name={icon} size={size} color={color}/>
    </View>
  </Pressable>
  )
}

export default IconButton

const styles=StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:50,
        
        marginRight:10
    },
    pressed:{
        opacity:0.50,
    }

})