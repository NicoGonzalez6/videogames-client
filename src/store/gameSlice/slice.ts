import { createSlice } from "@reduxjs/toolkit";
import { intitialState } from "./constants";
import { getAllGames, getSingleGame } from "./actions";

const gameSlice = createSlice({
  name: "games",
  initialState: intitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGames.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getAllGames.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.games = payload.games;
      state.currentPage = payload.currentPage;
      state.totalGames = payload.totalGames;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getAllGames.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(getSingleGame.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getSingleGame.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.game = payload;
    });
    builder.addCase(getSingleGame.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { reducer: gamesReducer } = gameSlice;
