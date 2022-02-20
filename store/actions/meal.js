export const TOGGLE_FAV = 'TOGGLE_FAVORITE';
export const SET_Filter = 'SET_FILTER';

export const mealAction = (mealId) => {
    return {
        type: TOGGLE_FAV,
        id: mealId
    }
}

export const filterAction = (filter) => {
    return {
        type: SET_Filter,
        filters : filter
    }
}