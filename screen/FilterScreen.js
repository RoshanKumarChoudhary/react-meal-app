import React, { useLayoutEffect, useEffect, useState, useCallback } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constant/Colors';
import { filterAction, SET_Filter } from '../store/actions/meal';

const FilterLayout = props => {
    return ( 
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch  trackColor={{true: Colors.primaryColor}}
                thumbColor={Platform.OS === 'android'? Colors.accentColor: ''}
                value={props.state} 
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FilterScreen = ({navigation, route}) => {

    const [isGluteenFree, setIsGluteenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const dispatch = useDispatch();

    const saveFilterData = useCallback(() => {
        const appliedFilter = {
            gluteenFree : isGluteenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        navigation.navigate('Filter', {
            save: appliedFilter
        })
        dispatch(filterAction(appliedFilter));
    },[isVegetarian, isGluteenFree, isVegan, isLactoseFree, dispatch])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item title="hmaburger" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
                </HeaderButtons>
              ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="save" iconName="ios-save" onPress={saveFilterData}/>
                </HeaderButtons>
              )
        })
    })

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Availaible filter / Restriction </Text>
            <FilterLayout label="Gluteen-Free" state={isGluteenFree} onChange={newValue => setIsGluteenFree(newValue)} />
            <FilterLayout label="Lactose- Free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterLayout label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterLayout label="Vegetarian" state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 15
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    title: {
        fontSize: 22,
        fontFamily: 'open-sans-bold',
        marginBottom: 5
    }
})
