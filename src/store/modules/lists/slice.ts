import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

import {
  AddListPayload,
  AddTaskPayload,
  List,
  RemoveListPayload,
  RemoveTaskPayload,
  ReorderListPayload,
  ReorderTaskPayload,
  UpdateListPayload,
  UpdateTaskPayload,
} from "./types";

export const name = "@lists";

export const initialState = {
  error: false,
  lists: [
    {
      color: "#1992FA",
      name: "Home",
      slug: "",
      tasks: [],
    },
  ],
  loading: false,
};

interface ListState {
  error: boolean;
  lists: List[];
  loading: boolean;
}

const lists = createSlice({
  name,
  initialState,
  reducers: {
    addList: (state: ListState, action: PayloadAction<AddListPayload>) => {
      const { list } = action.payload;

      if (state.lists.find((l) => l.slug === list.slug)) return;

      state.lists = [...state.lists, { ...list, tasks: [] }];
    },
    addTask: (state: ListState, action: PayloadAction<AddTaskPayload>) => {
      const { task } = action.payload;

      const id = uuidv4();

      state.lists = state.lists.map((l) =>
        l.slug === task.list.slug
          ? {
              ...l,
              tasks: [
                {
                  ...task,
                  id,
                  list: { ...task.list, slug: l.slug },
                },
                ...l.tasks,
              ],
            }
          : l
      );
    },
    loadLists: (state: ListState) => {
      state.loading = true;
    },
    loadListsSuccess: (state: ListState, action: PayloadAction<List[]>) => {
      state.lists = action.payload;
      state.loading = false;
    },
    removeList: (
      state: ListState,
      action: PayloadAction<RemoveListPayload>
    ) => {
      const { slug } = action.payload;

      if (slug === "") return;

      state.lists = state.lists.filter((t) => t.slug !== slug);
    },
    removeTask: (
      state: ListState,
      action: PayloadAction<RemoveTaskPayload>
    ) => {
      const { id } = action.payload;

      state.lists = state.lists.map((l) => {
        return {
          ...l,
          tasks: l.tasks.filter((t) => t.id !== id),
        };
      });
    },
    reorderList: (
      state: ListState,
      action: PayloadAction<ReorderListPayload>
    ) => {
      const { result } = action.payload;

      const { destination, source } = result;

      if (!destination) return;

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
        return;

      const home = state.lists.find((l) => l.slug === "");

      if (!home) return;

      const lists = Array.from(
        (JSON.parse(JSON.stringify(state.lists)) as List[]).filter(
          (l) => l.slug !== ""
        )
      );
      const [removed] = lists.splice(source.index, 1);
      lists.splice(destination.index, 0, removed);

      state.lists = [home, ...lists];
    },
    reorderTask: (
      state: ListState,
      action: PayloadAction<ReorderTaskPayload>
    ) => {
      const { listSlug, result } = action.payload;

      const { destination, source } = result;

      if (!destination) return;

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      )
        return;

      const list = state.lists.find((l) => l.slug === listSlug);

      if (!list) return;

      const task = list.tasks[source.index];

      list.tasks.splice(source.index, 1);
      list.tasks.splice(destination.index, 0, task);

      state.lists = state.lists.map((l) => (l.slug === listSlug ? list : l));
    },
    updateList: (
      state: ListState,
      action: PayloadAction<UpdateListPayload>
    ) => {
      const { list } = action.payload;

      const isHome = list.slug === "";

      state.lists = state.lists.map((l) =>
        l.slug === list.slug
          ? {
              ...l,
              ...list,
              slug:
                list.name && !isHome
                  ? list.name.toLowerCase().replace(" ", "-")
                  : l.slug,
            }
          : l
      );
    },
    updateTask: (
      state: ListState,
      action: PayloadAction<UpdateTaskPayload>
    ) => {
      const { task } = action.payload;

      state.lists = state.lists.map((l) => {
        return {
          ...l,
          tasks: l.tasks.map((t) => {
            if (t.id === task.id) {
              return {
                ...t,
                ...task,
              };
            }

            return t;
          }),
        };
      });
    },
  },
});

export const { addList, addTask, removeList, removeTask, updateTask } =
  lists.actions;

export default lists.reducer;
