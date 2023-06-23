import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/index";

const lists = (state: RootState) => state.lists.present.lists;

const selectLists = createSelector(lists, (lists) => lists);

export { selectLists };
