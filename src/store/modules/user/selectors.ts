import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@store/index";

const user = (state: RootState) => state.user.user;

const selectUser = createSelector(user, (user) => user);

export { selectUser };
