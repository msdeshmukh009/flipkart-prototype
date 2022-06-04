const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_HIGH_TO_LOW":
      return { ...state, sortBy: "high-to-low" };
    case "SORT_LOW_TO_HIGH":
      return { ...state, sortBy: "low-to-high" };
    case "ADD_CATEGORY":
      const isCategoryExist = state.categories.includes(action.payload);
      return isCategoryExist
        ? {
            ...state,
            categories: state.categories.filter(item => item !== action.payload),
          }
        : { ...state, categories: [...state.categories, action.payload] };
    case "ADD_SIZES":
      const isSizeAdded = state.sizes.includes(action.payload);
      return isSizeAdded
        ? {
            ...state,
            sizes: state.sizes.filter(item => item !== action.payload),
          }
        : { ...state, sizes: [...state.sizes, action.payload] };
    case "ADD_IDEAL_FOR":
      const isIdealFor = state.idealFor.includes(action.payload);
      return isIdealFor
        ? {
            ...state,
            idealFor: state.idealFor.filter(item => item !== action.payload),
          }
        : { ...state, idealFor: [...state.idealFor, action.payload] };

    case "CLEAR_ALL":
      return { ...state, sortBy: "", categories: [], idealFor: [], sizes: [] };
    default:
      return state;
  }
};
export { filterReducer };
