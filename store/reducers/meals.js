import { MEALS } from "../../data/dummy-data";

const INITIAL_STATE = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default mealsReducer;
