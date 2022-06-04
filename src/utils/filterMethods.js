const sortProducts = (sortBy, data) => {
  let tempData = [...data];
  if (sortBy === "high-to-low") {
    tempData.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "low-to-high") {
    tempData.sort((a, b) => a.price - b.price);
  }
  return tempData;
};

const filterProducts = (state, data) => {
  let tempData = [...data];

  if (state.categories.length > 0) {
    tempData = tempData.filter(product => state.categories.includes(product.brand));
  }
  if (state.sizes.length > 0) {
    tempData = tempData.filter(product => state.sizes.includes(product.size));
  }

  if (state.idealFor.length > 0) {
    tempData = tempData.filter(product => state.idealFor.includes(product.idealFor));
  }

  return tempData;
};

export { sortProducts, filterProducts };
