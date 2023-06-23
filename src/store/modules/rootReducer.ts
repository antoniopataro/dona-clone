import { combineReducers } from "@reduxjs/toolkit";

import undoable from "redux-undo";

import lists from "./lists/slice";
import user from "./user/slice";

const rootReducer = combineReducers({
  lists: undoable(lists, {
    // comment on @layouts/app.layout.tsx + 10 undo steps
    limit: 10 + 2,
  }),
  user,
});

export default rootReducer;
