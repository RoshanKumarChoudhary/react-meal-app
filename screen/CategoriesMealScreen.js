import React, { useLayoutEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import { MEALS } from '../Data/dummy-data';
import { mealAction } from '../store/actions/meal';

const LayoutText = (props) => {
    return (
        <View style={styles.itemText}>
            <DefaultText>
                {props.children}
            </DefaultText>
        </View>
    )
}

const CategoriesMealScreen = ({navigation, route}) => {
    const mealsAvailaible = useSelector(state => state.meal.filter);
    const dispatch = useDispatch();
    const mid = route.params.mealId;
    const isFav = useSelector(state => state.meal.favorite.some(meal => mid === meal.id));
    const [isFavMeal, setIsFavMeal] = useState(isFav);

    useLayoutEffect(() => {
        const mid = route.params.mealId;
        const selectedMeal = mealsAvailaible.find(meal => meal.id === mid);
        const toggleFavHandler = () => {
            setIsFavMeal(fav => !fav);
            dispatch(mealAction(mid));
        }
        navigation.setOptions({
            title: selectedMeal.title === '' ? 'MealScreen' : selectedMeal.title,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Favorite"  iconName={isFavMeal? 'ios-star': 'ios-star-outline'} onPress={toggleFavHandler}/>
                </HeaderButtons>
            ),
        })
    }, [navigation, isFavMeal])

    
    const selectedMeal = mealsAvailaible.find(meal => meal.id === mid);
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText> {selectedMeal.duration} </DefaultText>
                <DefaultText>{selectedMeal.affordibality.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(meal => <LayoutText key={meal}>{meal}</LayoutText>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => <LayoutText key={step}>{step}</LayoutText>)}
        </ScrollView>
    )
}

export default CategoriesMealScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 20
    },
    title:{
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 22
    },
    itemText: {
        margin: 10,
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1
    }
})
