import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../types";
const INITIAL_STATE = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingMealIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingMealIndex >= 0) {
        const updatedFavouriteMeals = [...state.favouriteMeals];
        updatedFavouriteMeals.splice(existingMealIndex, 1);
        return {
          ...state,
          favouriteMeals: updatedFavouriteMeals,
        };
      } else {
      }
    default:
      return state;
  }
};

export default mealsReducer;
