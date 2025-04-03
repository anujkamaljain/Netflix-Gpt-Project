import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    tmdbmovieResults: null,
    geminiMovieNames: null,
    SearchButtonClick: false,
    ApiKeySubmitButtonClick: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGeminiMovieResult: (state,action) => {
        const {movieResults, movieNames} = action.payload;
        state.geminiMovieNames = movieNames;
        state.tmdbmovieResults = movieResults;
    },
    removeGeminiMovieResult: (state) => {
      state.geminiMovieNames = null;
      state.tmdbmovieResults = null;
      state.SearchButtonClick = false;
      state. ApiKeySubmitButtonClick = false;
  },
    toggleSearchButtonClick: (state) => {
      state.SearchButtonClick = !state.SearchButtonClick;
    },
    toggleApiKeySubmitButtonClick: (state) => {
      state. ApiKeySubmitButtonClick = !state.ApiKeySubmitButtonClick;
    },
  },
});

export const { toggleGptSearchView , addGeminiMovieResult, toggleSearchButtonClick, removeGeminiMovieResult, toggleApiKeySubmitButtonClick } = GPTSlice.actions;

export default GPTSlice.reducer;
