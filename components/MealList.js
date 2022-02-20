import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MealItem from './MealItem'


const MealList = (props) => {
    const renderMealData = (itemData) => {
        return (
          <MealItem title={itemData.item.title} onSelectMeal={() => props.navigation.navigate('CategoryMeals',{
            mealId: itemData.item.id
          })} complexity={itemData.item.complexity} imageUrl={itemData.item.imageUrl} affordibality={itemData.item.affordibality} duration={itemData.item.duration} />
        )
      }
    return (
        <FlatList style={styles.list} keyExtractor={(item, index) => item.id} data={props.listData} renderItem={renderMealData}/>

    )
}

export default MealList

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10
      }
})
