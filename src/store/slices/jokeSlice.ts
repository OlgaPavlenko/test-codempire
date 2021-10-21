import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IJoke } from "../../shared/interfaces/interfaces";

const initialState: IJoke = {
  joke: "The only thing Chuck Norris says on a job interview: “Hi, I’m Chuck Norris and I start tomorrow. Any questions?”",
};

export const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    getJoke: (state, action: PayloadAction<string>) => {
      state.joke = action.payload;
    },
  },
});

export const { getJoke } = jokeSlice.actions;

export default jokeSlice.reducer;
