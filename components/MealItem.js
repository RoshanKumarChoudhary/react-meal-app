import React from 'react'
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DefaultText from './DefaultText'

const MealItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View style={styles.mealItem}>
                <View style={{...styles.mealRow, ...styles.mealHeader}}> 
                    <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                     </ImageBackground>
                </View>
                <View style={{...styles.mealDetail, ...styles.mealRow}}> 
                    <DefaultText>{props.duration}</DefaultText>
                    <DefaultText>{props.affordibality.toUpperCase()}</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                </View> 
            </View>
        </TouchableOpacity>
    )
}

export default MealItem

const styles = StyleSheet.create({
    bgImage: {
        width:'100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        marginBottom: 10
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center'
    }
})
