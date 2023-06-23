import { all, put, takeLatest } from "redux-saga/effects";

import { setUser } from "./actions";

import { local } from "@services/storage";

function* loadUser(): Generator {
  try {
    const user = yield local.get("user");

    if (!user) {
      return;
    }

    yield put(setUser(JSON.parse(user as string)));
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest("@user/loadUser", loadUser)]);
