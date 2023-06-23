import { createAction } from "@reduxjs/toolkit";

import {
  AddListPayload,
  AddTaskPayload,
  RemoveListPayload,
  RemoveTaskPayload,
  ReorderListPayload,
  ReorderTaskPayload,
  UpdateListPayload,
  UpdateTaskPayload,
} from "./types";

export const addList = createAction<AddListPayload>("@lists/addList");
export const addTask = createAction<AddTaskPayload>("@lists/addTask");

export const loadLists = createAction("@lists/loadLists");
export const loadListsSuccess = createAction("@lists/loadListsSuccess");

export const removeList = createAction<RemoveListPayload>("@lists/removeList");
export const removeTask = createAction<RemoveTaskPayload>("@lists/removeTask");
export const reorderList =
  createAction<ReorderListPayload>("@lists/reorderList");
export const reorderTask =
  createAction<ReorderTaskPayload>("@lists/reorderTask");
export const updateList = createAction<UpdateListPayload>("@lists/updateList");
export const updateTask = createAction<UpdateTaskPayload>("@lists/updateTask");
