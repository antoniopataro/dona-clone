import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useDispatch, useSelector } from "react-redux";

import ColorPicker from "@components/ColorPicker";
import Logo from "@components/Logo";
import LordIcon from "@components/LordIcon";
import TaskItem from "@components/TaskItem";
import TaskWriter from "@components/TaskWriter";

import useOnClickOutside from "@hooks/useOnClickOutside";
import useWindowSize from "@hooks/useWindowSize";

import {
  addList,
  addTask,
  loadLists,
  removeList,
  removeTask,
  reorderTask,
  updateList,
} from "@store/modules/lists/actions";
import { selectLists } from "@store/modules/lists/selectors";
import { selectUser } from "@store/modules/user/selectors";
import { AddList, List as ListProps, Task } from "@store/modules/lists/types";

import getTime from "@utils/get-time";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline";

import { useNavigate, useParams } from "react-router-dom";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const defaultList: AddList = {
  color: "#1992FA",
  name: "",
  slug: "",
};

function List() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const dispatch = useDispatch();

  const lists = useSelector(selectLists);
  const user = useSelector(selectUser);

  const [addingTask, setAddingTask] = useState(false);
  const [choosingColor, setChoosingColor] = useState(false);
  const [choosingColorSlug, setChoosingColorSlug] = useState<string | null>(
    null
  );
  const [creatingList, setCreatingList] = useState(false);
  const [newList, setNewList] = useState(defaultList);
  const [removingTask, setRemovingTask] = useState(false);
  const [removingTaskId, setRemovingTaskId] = useState<string | null>(null);
  const [renamingList, setRenamingList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const addListInputRef = useRef<HTMLInputElement>(null);
  const addListRef = useRef<HTMLDivElement>(null);
  const colorPickerButtonRef = createRef<HTMLButtonElement>();
  const colorPickerParentRef = useRef<HTMLDivElement>(null);
  const renameListInputRef = useRef<HTMLInputElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(loadLists());
  }, [dispatch]);

  const closeColorPicker = useCallback(
    (e?: MouseEvent | TouchEvent) => {
      if (e && e.target === colorPickerButtonRef.current) return;

      setChoosingColor(false);
      setChoosingColorSlug(null);
    },
    [colorPickerButtonRef, setChoosingColor, setChoosingColorSlug]
  );

  const list = useMemo(
    () => lists.find((l) => l.slug === (slug ?? "")),
    [lists, slug]
  );

  const filteredTasks: Task[] = useMemo(
    () =>
      !list
        ? []
        : !slug
        ? lists.map((l) => l.tasks).flat()
        : list.tasks.filter((t: Task) => t.list.slug === list.slug),
    [list, lists, slug]
  );

  const handleAddList = useCallback(() => {
    if (!newList.name || lists.find((l) => l.name === newList.name)) return;

    const slug = newList.name.toLowerCase().replace(" ", "-");

    dispatch(
      addList({
        list: {
          ...newList,
          slug,
        },
      })
    );

    setCreatingList(false);
    setNewList(defaultList);

    navigate(`/${slug}`);
  }, [dispatch, newList, lists, navigate]);

  const handleAddTask = useCallback(
    (task: Omit<Task, "id">) => {
      setAddingTask(true);

      dispatch(
        addTask({
          task,
        })
      );

      setTimeout(() => {
        setAddingTask(false);
      }, 250);
    },
    [dispatch]
  );

  const handleChoosingColor = useCallback(
    (slug?: string) => {
      if (choosingColorSlug === slug || (!slug && slug !== "")) {
        setChoosingColor((choosingColor) => !choosingColor);
        setChoosingColorSlug(null);
        return;
      }

      setChoosingColor((choosingColor) => !choosingColor);
      setChoosingColorSlug(slug);
    },
    [choosingColorSlug, setChoosingColor, setChoosingColorSlug]
  );

  const handleRenameList = useCallback(
    (name: string) => {
      if (!list) return;

      dispatch(
        updateList({
          list: {
            slug: list.slug,
            name,
          },
        })
      );

      setRenamingList(false);
    },
    [dispatch, list, setRenamingList]
  );

  const handleRemoveList = useCallback(
    (list: ListProps) => {
      if (list.slug === "") return;

      setTimeout(() => {
        dispatch(removeList({ slug: list.slug }));

        if (list.slug === slug) navigate("/");
      }, 250);
    },
    [dispatch, navigate, slug]
  );

  const handleRemoveTask = useCallback(
    (id: string) => {
      setRemovingTask(true);
      setRemovingTaskId(id);

      setTimeout(() => {
        dispatch(removeTask({ id }));

        setRemovingTask(false);
        setRemovingTaskId(null);
      }, 250);
    },
    [dispatch]
  );

  const handleReorderTask = (result: DropResult) => {
    if (!list) return;

    dispatch(reorderTask({ listSlug: list.slug, result }));
  };

  const handleUpdateList = useCallback(
    (list: ListProps) => {
      dispatch(updateList({ list }));
    },
    [dispatch]
  );

  const isActiveList = useCallback(
    (s: string) => (s === "" ? !slug : slug === s),
    [slug]
  );

  const startCreatingList = useCallback(() => {
    setCreatingList(true);

    setTimeout(() => {
      if (!addListInputRef.current) return;

      if (document.activeElement === addListInputRef.current) return;

      addListInputRef.current.focus();
    });
  }, [addListInputRef, setCreatingList]);

  const startRenamingList = useCallback(() => {
    setRenamingList(true);

    setTimeout(() => {
      renameListInputRef.current?.focus();
      renameListInputRef.current?.select();
    });
  }, [setRenamingList, renameListInputRef]);

  useOnClickOutside(addListRef, () => {
    if (choosingColor) return;

    setCreatingList(false);
    setNewList(defaultList);
  });

  useOnClickOutside(sidebarRef, () => {
    if (choosingColor) return;

    setShowSidebar(false);
  });

  const { width } = useWindowSize();

  return (
    <main className="hide-scrollbar h-full w-full overflow-auto sm:pl-4 sm:pt-4 md:max-w-[calc(100%-320px)] md:pl-6 md:pt-6 lg:max-w-[calc(100%-384px)] lg:pl-8 lg:pt-8">
      <div className="mx-auto flex w-full flex-col md:max-w-sm lg:max-w-md xl:max-w-2xl">
        {list &&
          (list.slug === "" ? (
            <div className="hidden w-full flex-col gap-1 sm:flex">
              <span className="w-fit text-sm text-text/50">
                {new Date().toLocaleString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
                .
              </span>
              <div className="flex w-full items-center gap-2">
                <Logo color={list.color} size={16} />
                <span className="h-8 w-fit truncate text-2xl font-medium text-text">
                  Good {getTime()}, {user.username ? user.username : "User"}.
                </span>
              </div>
            </div>
          ) : (
            <div className="hidden w-full flex-col gap-1 sm:flex">
              <span className="w-fit text-sm text-text/50">
                {new Date().toLocaleString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
                .
              </span>
              <div className="flex w-full items-center gap-2">
                <Logo color={list.color} size={16} />
                {renamingList ? (
                  <input
                    defaultValue={list.name}
                    onBlur={(e) => handleRenameList(e.target.value)}
                    onKeyDown={(e) => {
                      if (!renameListInputRef.current) return;

                      if (e.key === "Enter") {
                        handleRenameList(renameListInputRef.current.value);
                      }
                    }}
                    ref={renameListInputRef}
                    type="text"
                    className="h-8 w-full truncate bg-transparent text-2xl font-medium text-text outline-none"
                  />
                ) : (
                  <span
                    onClick={(e) => {
                      if (e.detail !== 2) return;

                      startRenamingList();
                    }}
                    className="h-8 w-full truncate text-2xl font-medium text-text"
                  >
                    {list.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        {(width === 0 ? window.innerWidth : width) >= 768 ? (
          <div className="pt-8">
            <TaskWriter addTask={handleAddTask} />
          </div>
        ) : (
          <div className="flex h-fit w-full items-center gap-3 sm:pt-8">
            <div ref={sidebarRef} className="relative">
              <button
                onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
                className="flex aspect-square h-[44px] items-center justify-center rounded-xl bg-white"
              >
                {showSidebar ? (
                  <LordIcon
                    src="https://cdn.lordicon.com/ofwpzftr.json"
                    trigger="loop"
                    colors={{ primary: "#808080" }}
                    size={16}
                  />
                ) : (
                  <Logo color={list && list.color} size={12} />
                )}
              </button>
              {showSidebar && (
                <ul className="absolute left-0 right-0 top-[calc(100%+12px)] z-10 flex w-[calc(100vw-48px)] flex-col gap-1 rounded-lg bg-white p-1 ring-1 ring-inset ring-black/5">
                  {lists.map((l) => (
                    <li key={l.slug} className="group">
                      <div
                        onClick={() => {
                          if ((!slug && l.slug === "") || slug === l.slug)
                            return;

                          navigate(`/${l.slug}`);
                          setShowSidebar(false);
                        }}
                        role="link"
                        tabIndex={0}
                        className={`flex w-full items-center gap-3 rounded px-3 py-2 group-first:rounded-t-lg group-last:rounded-b-lg ${
                          isActiveList(l.slug)
                            ? "bg-black/5 hover:bg-black/10"
                            : "bg-transparent hover:bg-black/5"
                        } cursor-default transition-colors`}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleChoosingColor(l.slug);
                          }}
                          ref={
                            !creatingList && choosingColorSlug === l.slug
                              ? colorPickerButtonRef
                              : undefined
                          }
                          type="button"
                          className="relative grid aspect-square h-6 w-6 cursor-default place-items-center rounded-lg bg-foreground transition-all hover:ring-1 hover:ring-black/5"
                        >
                          <Logo color={l.color} size={12} />
                          {choosingColor && l.slug === choosingColorSlug && (
                            <div
                              ref={
                                !creatingList && choosingColorSlug === l.slug
                                  ? colorPickerParentRef
                                  : undefined
                              }
                              className="absolute left-0 top-[calc(100%+8px)] z-20 w-64"
                            >
                              <ColorPicker
                                color={l.color}
                                changeColor={(color) => {
                                  handleUpdateList({ ...l, color });
                                  closeColorPicker();
                                }}
                                closeColorPicker={closeColorPicker}
                                parentRef={colorPickerParentRef}
                              />
                            </div>
                          )}
                        </button>
                        <span
                          className={`w-full pr-8 text-start text-sm ${
                            isActiveList(l.slug) ? "text-text" : "text-text/50"
                          }`}
                        >
                          {l.name}
                        </span>
                        {isActiveList(l.slug) && (
                          <CheckIcon className="w-2 flex-shrink-0 stroke-[3px] text-text" />
                        )}
                        <div className="grid aspect-square h-6 w-6 cursor-default place-items-center rounded-lg bg-foreground text-xs text-text/75">
                          <span className="h-3 -translate-y-px text-center font-medium">
                            {!l.slug
                              ? lists.map((l) => l.tasks).flat().length
                              : l.tasks.filter(
                                  (task: Task) => task.list.slug === l.slug
                                ).length}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleRemoveList(l);
                          }}
                          className="grid aspect-square h-6 w-6 cursor-default place-items-center rounded-lg bg-foreground text-xs text-text/75"
                        >
                          <LordIcon
                            src="https://cdn.lordicon.com/kfzfxczd.json"
                            trigger="hover"
                            colors={{ primary: "#808080" }}
                            size={12}
                          />
                        </button>
                      </div>
                    </li>
                  ))}
                  <li className="group">
                    <div
                      onClick={startCreatingList}
                      onKeyDown={(e) => {
                        if (!addListRef.current) return;

                        if (e.key === "Enter") {
                          handleAddList();
                        }

                        if (e.key === "Escape") {
                          setCreatingList(false);
                          setNewList(defaultList);
                        }
                      }}
                      ref={addListRef}
                      tabIndex={0}
                      className="flex w-full items-center gap-3 rounded-b-lg rounded-t px-3 transition-colors hover:bg-background"
                    >
                      <span className="grid aspect-square h-6 w-6 place-items-center rounded-lg bg-foreground">
                        {creatingList ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleChoosingColor();
                            }}
                            ref={
                              creatingList && choosingColorSlug === null
                                ? colorPickerButtonRef
                                : undefined
                            }
                            type="button"
                            className="relative z-10 grid aspect-square h-6 w-6 cursor-default place-items-center rounded-lg bg-foreground transition-all hover:ring-1 hover:ring-black/5"
                          >
                            <Logo color={newList.color ?? "gray"} size={12} />
                            {choosingColor && (
                              <div
                                ref={
                                  creatingList && choosingColorSlug === null
                                    ? colorPickerParentRef
                                    : undefined
                                }
                                className="absolute left-0 top-[calc(100%+8px)] z-10 w-64"
                              >
                                <ColorPicker
                                  color={newList.color}
                                  changeColor={(color) => {
                                    setNewList((newList) => ({
                                      ...newList,
                                      color,
                                    }));
                                    closeColorPicker();
                                  }}
                                  closeColorPicker={closeColorPicker}
                                  parentRef={colorPickerParentRef}
                                />
                              </div>
                            )}
                          </button>
                        ) : (
                          <PlusIcon className="w-3 stroke-2" />
                        )}
                      </span>
                      {creatingList ? (
                        <input
                          onChange={(e) =>
                            setNewList((newList) => ({
                              ...newList,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Create new list..."
                          ref={addListInputRef}
                          type="text"
                          value={newList.name}
                          className="w-full truncate bg-transparent py-2 text-left text-sm text-text outline-none transition-colors"
                        />
                      ) : (
                        <span className="w-full cursor-default truncate py-2 text-left text-sm text-text">
                          Create new list...
                        </span>
                      )}
                      {creatingList && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddList();
                          }}
                          type="button"
                          className="relative aspect-square h-6 w-6 cursor-default rounded-lg bg-foreground text-xs text-text/75"
                        >
                          <PlusIcon className="absolute inset-0 m-auto w-3 stroke-2" />
                        </button>
                      )}
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <TaskWriter addTask={handleAddTask} />
          </div>
        )}
        {filteredTasks.length === 0 ? (
          <span className="pt-4 text-center text-sm text-text/50 sm:pt-8">
            You're all done!
          </span>
        ) : !slug ? (
          <ul className="flex w-full flex-col pb-32 pt-4 after:pointer-events-none after:absolute after:bottom-0 after:h-32 after:w-full after:bg-gradient-to-b after:from-background/0 after:to-background md:pt-7">
            {filteredTasks.map((t, index) => (
              <div
                key={t.id}
                className={`my-1 ${
                  addingTask && index !== 0
                    ? "animate-slide-tasks-down--sm sm:animate-slide-tasks-down--md md:animate-slide-tasks-down"
                    : removingTask &&
                      removingTaskId &&
                      index >
                        filteredTasks.map((t) => t.id).indexOf(removingTaskId)
                    ? "animate-slide-tasks-up--sm sm:animate-slide-tasks-up--md md:animate-slide-tasks-up"
                    : ""
                } [&>*]:rounded-md [&>*]:first:rounded-t-xl [&>*]:last:rounded-b-xl sm:[&>*]:rounded-lg sm:[&>*]:first:rounded-t-2xl sm:[&>*]:last:rounded-b-2xl`}
              >
                <TaskItem
                  adding={addingTask}
                  addingId={(list!.tasks[0] as Task | undefined)?.id ?? null}
                  color={
                    !slug
                      ? lists.find((l) => l.slug === t.list.slug)?.color ?? ""
                      : list!.color
                  }
                  removeTask={handleRemoveTask}
                  removing={removingTask}
                  removingId={removingTaskId}
                  task={t}
                />
              </div>
            ))}
          </ul>
        ) : (
          <DragDropContext onDragEnd={handleReorderTask}>
            <Droppable droppableId="droppable-tasks">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex w-full flex-col pb-32 pt-4 after:absolute after:bottom-0 after:h-32 after:w-full after:bg-gradient-to-b after:from-background/0 after:to-background md:pt-7"
                >
                  {filteredTasks.map((t, index) => (
                    <Draggable key={t.id} draggableId={t.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className={`my-1 ${
                            addingTask && index !== 0
                              ? "animate-slide-tasks-down"
                              : removingTask &&
                                removingTaskId &&
                                index >
                                  filteredTasks
                                    .map((t) => t.id)
                                    .indexOf(removingTaskId)
                              ? "animate-slide-tasks-up--sm sm:animate-slide-tasks-up--md md:animate-slide-tasks-up"
                              : ""
                          } [&>*]:rounded-md [&>*]:first:rounded-t-xl [&>*]:last:rounded-b-xl sm:[&>*]:rounded-lg sm:[&>*]:first:rounded-t-2xl sm:[&>*]:last:rounded-b-2xl`}
                        >
                          <TaskItem
                            adding={addingTask}
                            addingId={
                              (list!.tasks[0] as Task | undefined)?.id ?? null
                            }
                            color={
                              !slug
                                ? lists.find((l) => l.slug === t.list.slug)
                                    ?.color ?? ""
                                : list!.color
                            }
                            removeTask={handleRemoveTask}
                            removing={removingTask}
                            removingId={removingTaskId}
                            task={t}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </main>
  );
}

export default List;
