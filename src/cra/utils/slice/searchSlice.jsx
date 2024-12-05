import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieResults: null,
    movieNames: null,
    //searchKey: "",
  },
  reducers: {
    toggleSearchView: (state) => {
      //  console.log("Toggling state", state.showSearch);
      state.showSearch = !state.showSearch;
    },
    addMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    addSearch: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { toggleSearchView, addMovieResult, addSearch } =
  searchSlice.actions;

export default searchSlice.reducer;
