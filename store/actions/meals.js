import { TOGGLE_FAVOURITE } from "../types";

export const toggleFavourite = (id) => {
  return {
    type: TOGGLE_FAVOURITE,
    mealId: id,
  };
};
