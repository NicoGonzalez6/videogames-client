import { createAsyncThunk } from "@reduxjs/toolkit";
import { gamesInstance } from "../../services";

export const getAllGames = createAsyncThunk(
  "games/getAllGames",
  async (
    payload: { currentPage: number; gameName?: string },
    { rejectWithValue }
  ) => {
    try {
      const { gameName, currentPage } = payload;

      const response = await gamesInstance(
        `?name=${gameName ? gameName : ""}&currentPage=${currentPage}`
      ).then((res) => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSingleGame = createAsyncThunk(
  "games/getSingleGame",
  async (id_number: string, { rejectWithValue }) => {
    try {
      const response = await gamesInstance(`/${id_number}`).then(
        (res) => res.data
      );
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
