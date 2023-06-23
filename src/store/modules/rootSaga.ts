import { all } from "redux-saga/effects";

import lists from "./lists/sagas";
import user from "./user/sagas";

function* rootSaga(): Generator {
  return yield all([lists, user]);
}

export default rootSaga;
