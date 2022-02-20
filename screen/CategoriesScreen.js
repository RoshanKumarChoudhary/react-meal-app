import React, { useLayoutEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/CustomHeaderButton';

import { CATEGORIES } from '../Data/dummy-data';


// onPress={() => navigation.navigate('MealDetail',{
//     categoryId : itemData.item.id
const CategoriesScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                  <Item title="hmaburger" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
                </HeaderButtons>
              ),
        })
    },[navigation])
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile title = {itemData.item.title} colorSelect={itemData.item.color} onSelect = {() => navigation.navigate('MealDetail', {
                categoryId : itemData.item.id
            })} />
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;
