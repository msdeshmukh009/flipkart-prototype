const Filters = ({ filterDispatch, filteredProductsState }) => {
  return (
    <aside className="filters sticky right-0 top-16 z-10 p-2 h-96">
      <header className="flex justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          className="text-xs text-blue-500"
          onClick={() => filterDispatch({ type: "CLEAR_ALL" })}
        >
          CLEAR ALL
        </button>
      </header>
      <div className="text-center px-4 mt-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Sort by</h3>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="radio"
              name="sort-by-price"
              checked={filteredProductsState.sortBy === "high-to-low"}
              onChange={() => filterDispatch({ type: "SORT_HIGH_TO_LOW" })}
            />
            High-to-Low
          </label>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="radio"
              name="sort-by-price"
              onChange={() => filterDispatch({ type: "SORT_LOW_TO_HIGH" })}
              checked={filteredProductsState.sortBy === "low-to-high"}
            />
            Low-to-High
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Sizes</h3>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              checked={filteredProductsState.sizes.includes("s")}
              onChange={() => filterDispatch({ type: "ADD_SIZES", payload: "s" })}
            />
            S
          </label>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              checked={filteredProductsState.sizes.includes("m")}
              onChange={() => filterDispatch({ type: "ADD_SIZES", payload: "m" })}
            />
            M
          </label>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              checked={filteredProductsState.sizes.includes("l")}
              onChange={() => filterDispatch({ type: "ADD_SIZES", payload: "l" })}
            />
            L
          </label>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              checked={filteredProductsState.sizes.includes("xl")}
              onChange={() => filterDispatch({ type: "ADD_SIZES", payload: "xl" })}
            />
            XL
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Brand</h3>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              onChange={() => filterDispatch({ type: "ADD_CATEGORY", payload: "Allen Solly" })}
              checked={filteredProductsState.categories.includes("Allen Solly")}
            />
            Allen Solly
          </label>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              onChange={() => filterDispatch({ type: "ADD_CATEGORY", payload: "FTX" })}
              checked={filteredProductsState.categories.includes("FTX")}
            />
            FTX
          </label>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              onChange={() => filterDispatch({ type: "ADD_CATEGORY", payload: "LEVI'S" })}
              checked={filteredProductsState.categories.includes("LEVI'S")}
            />
            LEVI'S
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Ideal For</h3>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              onChange={() => filterDispatch({ type: "ADD_IDEAL_FOR", payload: "Men" })}
              checked={filteredProductsState.idealFor.includes("Men")}
            />
            Men
          </label>
          <label className="cursor-pointer flex gap-2 items-center">
            <input
              type="checkbox"
              onChange={() => filterDispatch({ type: "ADD_IDEAL_FOR", payload: "Women" })}
              checked={filteredProductsState.idealFor.includes("Women")}
            />
            Women
          </label>
        </div>
      </div>
    </aside>
  );
};
export { Filters };
