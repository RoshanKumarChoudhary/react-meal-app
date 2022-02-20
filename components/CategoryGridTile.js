import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

const CategoryGridTile = (props) => {
    let TouchacleComp = TouchableOpacity;
    if(Platform.OS === 'android'  && Platform.Version >= 21){
        TouchacleComp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <TouchacleComp style={{flex:1}} onPress = {props.onSelect}>
            <View style={{...styles.containerGrid,...{backgroundColor:props.colorSelect}}}>
                <Text style={styles.textContainer} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchacleComp>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: 'hidden'
    },
    containerGrid:{
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        shadowOffset: {width: 5, height: 5},
        elevation: 3,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15
    },
    textContainer:{
        fontFamily: 'open-sans-bold',
        fontSize: 22
    }
})
