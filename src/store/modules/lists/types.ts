import { DropResult } from "react-beautiful-dnd";

export interface Task {
  content: string;
  date?: string;
  done: boolean;
  id: string;
  list: {
    slug: string;
  };
}

export interface List {
  color: string;
  name: string;
  slug: string;
  tasks: Task[];
}

export type AddList = Pick<List, "color" | "name" | "slug">;

export interface AddListPayload {
  list: AddList;
}

export type AddTask = Omit<Task, "id" | "list"> & {
  list: {
    slug: string;
  };
};

export interface AddTaskPayload {
  task: AddTask;
}

export interface RemoveListPayload {
  slug: string;
}

export interface RemoveTaskPayload {
  id: string;
}

export interface ReorderListPayload {
  result: DropResult;
}

export interface ReorderTaskPayload {
  listSlug: string;
  result: DropResult;
}

export interface UpdateListPayload {
  list: Partial<List> & Pick<List, "slug">;
}

export interface UpdateTaskPayload {
  task: Task;
}
