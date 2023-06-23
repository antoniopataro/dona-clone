import { createAction } from "@reduxjs/toolkit";

import { User } from "./types";

export const loadUser = createAction("@user/loadUser");
export const setUser = createAction<User>("@user/setUser");
