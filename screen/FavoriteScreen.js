import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList'



const FavoriteScreen = ({navigation}) => {
    
    const favMeals = useSelector(state => state.meal.favorite);
    
    if(favMeals.length === 0 || !favMeals){
        return(
            <View style={styles.content}>
                <DefaultText>There is no item added to favorite. Start adding one !!</DefaultText>
            </View>
        )
    }
        
    return (
        <MealList listData={favMeals} navigation={navigation} />
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoriteScreen