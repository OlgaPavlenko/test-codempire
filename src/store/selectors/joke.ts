import { createSelector } from "@reduxjs/toolkit";
import { IJoke } from "../../shared/interfaces/interfaces";

const stateSelector = (state: IJoke): IJoke => state;

export const jokeSelector = createSelector(stateSelector, ({ joke }) => joke);
