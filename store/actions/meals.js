import { TOGGLE_FAVOURITE, SET_FILTERS } from "../types";

export const toggleFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE,
    mealId: id,
  };
};

export const setFilters = (filterSettings) => {
  return {
    type: SET_FILTERS,
    filters: filterSettings,
  };
};
