import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import { CATEGORIES } from '../Data/dummy-data';

const MealDetailsScreen = ({navigation,route}) => {
    useLayoutEffect(() => {
        const cid = route.params.categoryId;
        const selectedData = CATEGORIES.find(cat => cat.id === cid);
        navigation.setOptions({
          title: selectedData.title === '' ? 'No title' : selectedData.title
        });
      }, [navigation]);

      const mealsAvailaible = useSelector(state => state.meal.filter);
      const cid = route.params.categoryId;
      const mealSelected = mealsAvailaible.filter(meals => meals.categoriesIds.indexOf(cid) >= 0)

      if(mealSelected.length === 0){
        return (
          <View style={styles.content}>
            <DefaultText>No items found, maybe check your filter !</DefaultText>
          </View>
        )
      }
 

    return (
      <MealList listData={mealSelected} navigation={navigation} />
    )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailsScreen

