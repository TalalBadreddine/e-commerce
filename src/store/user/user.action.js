import { USER_ACTION_TYPES } from "../../context/user.context";
import { createAction } from "../../Utils/reducers/Reducer.utils";

export const setCurrentUser = (payload) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, payload)