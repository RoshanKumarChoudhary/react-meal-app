import { MEALS } from "../../Data/dummy-data"
import { SET_Filter, TOGGLE_FAV } from "../actions/meal";

const initialState = {
    meals: MEALS,
    filter: MEALS,
    favorite: []
}

const mealReducer = (state=initialState, action) => {
    switch(action.type){
        case TOGGLE_FAV:
            const existingFav = state.favorite.findIndex(meal => meal.id === action.id);
            if(existingFav >=0 ){
                const favMeals = [...state.favorite];
                favMeals.splice(existingFav,1)
                return {...state, favorite: favMeals};
            }
            else {
                const updatedMeal = state.meals.find(meal => meal.id === action.id);
                return {...state, favorite: state.favorite.concat(updatedMeal)};
            }
        case SET_Filter:
            const appliedFilter = action.filters;
            const filteredMeal = state.meals.filter(meal => {
                if(appliedFilter.gluteenFree && !meal.isGlutenFree) return false;
                if(appliedFilter.lactoseFree && !meal.isLactoseFree) return false;
                if(appliedFilter.vegan && !meal.isVegan) return false;
                if(appliedFilter.vegetarian && !meal.isVegetarian) return false;
                return true;
            })
            return {...state, filter: filteredMeal}
        default:
            return state
    }
    
}

export default mealReducer;