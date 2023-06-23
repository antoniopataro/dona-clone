import { createRef, useCallback, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ColorPicker from "@components/ColorPicker";
import Logo from "@components/Logo";
import LordIcon from "@components/LordIcon";

import useOnClickOutside from "@hooks/useOnClickOutside";

import {
  addList,
  removeList,
  reorderList,
  updateList,
} from "@store/modules/lists/actions";
import { selectLists } from "@store/modules/lists/selectors";
import { AddList, List, Task } from "@store/modules/lists/types";

import { PlusIcon } from "@heroicons/react/24/outline";

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

import { Link, useNavigate, useParams } from "react-router-dom";

const defaultList: AddList = {
  color: "#1992FA",
  name: "",
  slug: "",
};

function Sidebar() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const dispatch = useDispatch();

  const lists = useSelector(selectLists);

  const [choosingColor, setChoosingColor] = useState(false);
  const [choosingColorSlug, setChoosingColorSlug] = useState<string | null>(
    null
  );
  const [addingList, setAddingList] = useState(false);
  const [addingListSlug, setAddingListSlug] = useState<string | null>(null);
  const [creatingList, setCreatingList] = useState(false);
  const [list, setList] = useState(defaultList);
  const [removingList, setRemovingList] = useState(false);
  const [removingListSlug, setRemovingListSlug] = useState<string | null>(null);
  const [renamingList, setRenamingList] = useState(false);
  const [renamingListSlug, setRenamingListSlug] = useState<string | null>(null);

  const addListRef = useRef<HTMLDivElement>(null);
  const addListButtonRef = useRef<HTMLButtonElement>(null);
  const colorPickerButtonRef = createRef<HTMLButtonElement>();
  const addListInputRef = useRef<HTMLInputElement>(null);
  const renameListInputRef = useRef<HTMLInputElement>(null);
  const colorPickerParentRef = useRef<HTMLDivElement>(null);

  const closeColorPicker = useCallback(
    (e?: MouseEvent | TouchEvent) => {
      if (e && e.target === colorPickerButtonRef.current) return;

      setChoosingColor(false);
      setChoosingColorSlug(null);
    },
    [colorPickerButtonRef, setChoosingColor, setChoosingColorSlug]
  );

  const focus = useCallback(() => {
    if (!addListInputRef.current) return;

    if (document.activeElement === addListInputRef.current) return;

    addListInputRef.current.focus();
  }, []);

  const handleAddList = useCallback(() => {
    if (!list.name || lists.find((l) => l.name === list.name)) return;

    const slug = list.name.toLowerCase().replace(" ", "-");

    setAddingList(true);
    setAddingListSlug(slug);

    dispatch(
      addList({
        list: {
          ...list,
          slug,
        },
      })
    );

    setTimeout(() => {
      setAddingList(false);
      setAddingListSlug(null);
    }, 250);

    setCreatingList(false);
    setList(defaultList);

    navigate(`/${slug}`);
  }, [dispatch, list, lists, navigate]);

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

  const handleRemoveList = useCallback(
    (list: List) => {
      if (list.slug === "") return;

      setRemovingList(true);
      setRemovingListSlug(list.slug);

      setTimeout(() => {
        dispatch(removeList({ slug: list.slug }));

        setRemovingList(false);
        setRemovingListSlug(null);

        if (list.slug === slug) navigate("/");
      }, 250);
    },
    [dispatch, navigate, slug]
  );

  const handleUpdateList = useCallback(
    (list: List) => {
      dispatch(updateList({ list }));
    },
    [dispatch]
  );

  const handleRenameList = useCallback(
    (slug: string, name: string) => {
      dispatch(
        updateList({
          list: {
            slug,
            name,
          },
        })
      );

      setRenamingList(false);
      setRenamingListSlug(null);
    },
    [dispatch, setRenamingList, setRenamingListSlug]
  );

  const handleReorderList = (result: DropResult) => {
    if (!list) return;

    dispatch(reorderList({ result }));
  };

  const home = useMemo(() => lists.find((l) => l.slug === "")!, [lists]);

  const isActiveList = useCallback(
    (s: string) => (s === "" ? !slug : slug === s),
    [slug]
  );

  const startCreatingList = useCallback(() => {
    setCreatingList(true);

    setTimeout(() => {
      focus();
    });
  }, [focus]);

  const startRenamingList = useCallback(
    (slug: string) => {
      setRenamingList(true);
      setRenamingListSlug(slug);

      setTimeout(() => {
        renameListInputRef.current?.focus();
        renameListInputRef.current?.select();
      });
    },
    [setRenamingList, setRenamingListSlug, renameListInputRef]
  );

  useOnClickOutside(addListRef, () => {
    if (choosingColor) return;

    setCreatingList(false);
    setList(defaultList);
  });

  return (
    <aside className="hidden h-full w-full flex-col justify-between rounded-2xl bg-foreground sm:flex sm:max-w-[256px] md:max-w-[320px] lg:max-w-[384px]">
      <div className="hide-scrollbar h-full overflow-auto sm:p-4 md:p-6 lg:p-8">
        <nav>
          <DragDropContext onDragEnd={handleReorderList}>
            <Droppable droppableId="droppable-tasks">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex h-full w-full flex-col"
                >
                  <li className="group my-1">
                    <Link
                      to={home.slug}
                      className={`flex w-full cursor-default items-center gap-4 rounded-lg px-3 py-3 transition-colors ${
                        isActiveList(home.slug) && "bg-background"
                      } hover:bg-background group-first:rounded-t-2xl`}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleChoosingColor(home.slug);
                        }}
                        ref={
                          !creatingList && choosingColorSlug === ""
                            ? colorPickerButtonRef
                            : undefined
                        }
                        type="button"
                        className="relative grid aspect-square h-6 w-6 cursor-default place-items-center rounded-lg bg-foreground transition-all hover:ring-1 hover:ring-black/5"
                      >
                        <Logo color={home.color} size={12} />
                        {choosingColor && home.slug === choosingColorSlug && (
                          <div
                            ref={
                              !creatingList && choosingColorSlug === ""
                                ? colorPickerParentRef
                                : undefined
                            }
                            className="absolute left-0 top-[calc(100%+8px)] z-10 w-64"
                          >
                            <ColorPicker
                              color={home.color}
                              changeColor={(color) => {
                                handleUpdateList({ ...home, color });
                                closeColorPicker();
                              }}
                              closeColorPicker={closeColorPicker}
                              parentRef={colorPickerParentRef}
                            />
                          </div>
                        )}
                      </button>
                      {renamingList && home.slug === renamingListSlug ? (
                        <input
                          defaultValue={home.name}
                          onBlur={(e) =>
                            handleRenameList(home.slug, e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (!renameListInputRef.current) return;

                            if (e.key === "Enter") {
                              handleRenameList(
                                home.slug,
                                renameListInputRef.current.value
                              );
                            }
                          }}
                          ref={renameListInputRef}
                          type="text"
                          className="w-full truncate bg-transparent text-left text-sm text-text outline-none"
                        />
                      ) : (
                        <span
                          onClick={(e) => {
                            if (e.detail !== 2) return;

                            startRenamingList(home.slug);
                          }}
                          className="min-h-[20px] w-full truncate text-left text-sm text-text"
                        >
                          {home.name}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveList(home);
                        }}
                        className="relative aspect-square h-6 w-6 cursor-default rounded-lg bg-foreground text-xs text-text/75"
                      >
                        <span className="absolute inset-0 m-auto h-3 -translate-y-px text-center font-medium">
                          {lists.map((l) => l.tasks).flat().length}
                        </span>
                      </button>
                    </Link>
                  </li>
                  {lists
                    .filter((l) => l.slug !== "")
                    .map((l, index) => (
                      <Draggable
                        key={l.slug}
                        draggableId={l.slug}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className={`group my-1 origin-top ${
                              addingList && addingListSlug === l.slug
                                ? "animate-add-item"
                                : removingList && removingListSlug === l.slug
                                ? "animate-remove-item"
                                : removingList &&
                                  removingListSlug &&
                                  index >
                                    lists
                                      .filter((l) => l.slug !== "")
                                      .map((l) => l.slug)
                                      .indexOf(removingListSlug)
                                ? "animate-slide-lists-up"
                                : ""
                            }`}
                          >
                            <Link
                              to={l.slug}
                              className={`flex w-full cursor-default items-center gap-4 rounded-lg px-3 py-3 transition-colors ${
                                isActiveList(l.slug) && "bg-background"
                              } hover:bg-background group-first:rounded-t-2xl`}
                            >
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
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
                                {choosingColor &&
                                  l.slug === choosingColorSlug && (
                                    <div
                                      ref={
                                        !creatingList &&
                                        choosingColorSlug === l.slug
                                          ? colorPickerParentRef
                                          : undefined
                                      }
                                      className="absolute left-0 top-[calc(100%+8px)] z-10 w-64"
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
                              {renamingList && l.slug === renamingListSlug ? (
                                <input
                                  defaultValue={l.name}
                                  onBlur={(e) =>
                                    handleRenameList(l.slug, e.target.value)
                                  }
                                  onKeyDown={(e) => {
                                    if (!renameListInputRef.current) return;

                                    if (e.key === "Enter") {
                                      handleRenameList(
                                        l.slug,
                                        renameListInputRef.current.value
                                      );
                                    }
                                  }}
                                  ref={renameListInputRef}
                                  type="text"
                                  className="w-full truncate bg-transparent text-left text-sm text-text outline-none"
                                />
                              ) : (
                                <span
                                  onClick={(e) => {
                                    if (e.detail !== 2) return;

                                    startRenamingList(l.slug);
                                  }}
                                  className="min-h-[20px] w-full truncate text-left text-sm text-text"
                                >
                                  {l.name}
                                </span>
                              )}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleRemoveList(l);
                                }}
                                className="relative aspect-square h-6 w-6 cursor-default rounded-lg bg-foreground text-xs text-text/75"
                              >
                                <span className="absolute inset-0 m-auto h-3 -translate-y-px text-center font-medium opacity-100 transition-opacity group-hover:opacity-0">
                                  {
                                    l.tasks.filter(
                                      (task: Task) => task.list.slug === l.slug
                                    ).length
                                  }
                                </span>
                                <div className="absolute inset-0 m-auto flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                  <LordIcon
                                    src="https://cdn.lordicon.com/kfzfxczd.json"
                                    trigger="hover"
                                    colors={{ primary: "#808080" }}
                                    size={12}
                                  />
                                </div>
                              </button>
                            </Link>
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  <li
                    className={`group my-1 ${
                      addingList
                        ? "animate-slide-lists-down"
                        : removingList
                        ? "animate-slide-lists-up"
                        : ""
                    }`}
                  >
                    <div
                      onClick={startCreatingList}
                      onKeyDown={(e) => {
                        if (!addListRef.current) return;

                        if (e.key === "Enter") {
                          handleAddList();
                        }

                        if (e.key === "Escape") {
                          setCreatingList(false);
                          setList(defaultList);
                        }
                      }}
                      ref={addListRef}
                      tabIndex={0}
                      className="flex w-full items-center gap-4 rounded-lg rounded-b-2xl px-3 transition-colors hover:bg-background"
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
                            <Logo color={list.color ?? "gray"} size={12} />
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
                                  color={list.color}
                                  changeColor={(color) => {
                                    setList((list) => ({ ...list, color }));
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
                            setList((list) => ({
                              ...list,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Create new list..."
                          ref={addListInputRef}
                          type="text"
                          value={list.name}
                          className="w-full truncate bg-transparent py-[14px] text-left text-sm text-text outline-none transition-colors"
                        />
                      ) : (
                        <span className="w-full cursor-default truncate py-[14px] text-left text-sm text-text">
                          Create new list...
                        </span>
                      )}
                      {creatingList && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddList();
                          }}
                          ref={addListButtonRef}
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
            </Droppable>
          </DragDropContext>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
