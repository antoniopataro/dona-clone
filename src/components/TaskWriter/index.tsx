import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Checkbox from "@components/Checkbox";
import Logo from "@components/Logo";
import LordIcon from "@components/LordIcon";

import useHotkeys from "@hooks/useHotkeys";
import useOnClickOutside from "@hooks/useOnClickOutside";

import { selectLists } from "@store/modules/lists/selectors";
import { Task } from "@store/modules/lists/types";

import { CheckIcon } from "@heroicons/react/24/outline";

import { useParams } from "react-router-dom";

const defaultTask = {
  content: "",
  done: false,
  list: {
    slug: "",
  },
};

interface Props {
  addTask: (task: Omit<Task, "id">) => void;
}

function TaskWriter({ addTask }: Props) {
  const { slug } = useParams();

  const lists = useSelector(selectLists);

  const [choosingList, setChoosingList] = useState(false);
  const [task, setTask] = useState<Omit<Task, "id">>(defaultTask);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTask((task) => ({
      ...task,
      list: {
        slug: slug ?? "",
      },
    }));
  }, [slug]);

  const handleAddTask = () => {
    if (!task.content) return;

    addTask({
      content: task.content,
      done: task.done,
      list: {
        slug: task.list.slug ?? slug ?? "",
      },
    });

    setTask({
      ...defaultTask,
      list: {
        slug: task.list.slug ?? slug ?? "",
      },
    });
  };

  const focus = () => {
    if (!inputRef.current) return;

    if (document.activeElement === inputRef.current) return;

    inputRef.current.focus();
  };

  const blur = () => {
    if (!inputRef.current) return;

    inputRef.current.blur();

    setTask((task) => ({
      ...task,
      content: "",
    }));
  };

  const toggleChecked = () => {
    setTask((task) => ({
      ...task,
      done: !task.done,
    }));
  };

  useHotkeys({
    element: document.body,
    hotkeys: [
      {
        ctrlKey: true,
        handler: focus,
        key: "K",
      },
    ],
  });

  useOnClickOutside(listRef, () => setChoosingList(false));

  return (
    <div
      onClick={focus}
      className="group pointer-events-auto flex w-full items-center gap-3 rounded-xl bg-white px-3 transition-colors sm:gap-4 sm:rounded-2xl sm:bg-black/5 sm:px-4 sm:focus-within:bg-foreground sm:hover:bg-black/10 sm:focus-within:hover:bg-foreground sm:active:hover:bg-foreground"
    >
      <div className="pointer-events-none hidden -translate-x-3 scale-50 opacity-0 transition-transform group-focus-within:pointer-events-auto group-focus-within:translate-x-0 group-focus-within:scale-100 group-focus-within:opacity-100 group-active:pointer-events-auto group-active:translate-x-0 group-active:scale-100 group-active:opacity-100 sm:block">
        <Checkbox checked={task.done} onChange={toggleChecked} />
      </div>
      <input
        onChange={(e) =>
          setTask((task) => ({ ...task, content: e.target.value }))
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask();
          }

          if (e.key === "Escape") {
            blur();
          }
        }}
        placeholder="Write a new task..."
        ref={inputRef}
        type="text"
        value={task.content}
        className="w-full truncate bg-transparent py-3 text-sm text-text outline-none transition-transform placeholder:text-text/50 sm:-translate-x-8 sm:py-4 sm:group-focus-within:translate-x-0 sm:group-active:translate-x-0 md:py-5"
      />
      <div
        ref={listRef}
        className="pointer-events-none relative hidden opacity-0 transition-opacity group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-active:opacity-100 sm:block"
      >
        <button
          onClick={() => setChoosingList((choosingList) => !choosingList)}
          type="button"
          className="h-8 cursor-default rounded-lg bg-black/5 px-3 transition-colors hover:bg-black/10"
        >
          <div className="flex items-center gap-2">
            <Logo
              color={lists.find((list) => list.slug === task.list.slug)?.color}
              size={12}
            />
            <LordIcon
              src="https://cdn.lordicon.com/zheynzsx.json"
              trigger="hover"
              colors={{ primary: "#808080" }}
              size={16}
            />
          </div>
        </button>
        {choosingList && (
          <ul className="absolute right-0 top-[calc(100%+12px)] z-10 flex min-w-[192px] flex-col gap-1 rounded-lg bg-white p-1 ring-1 ring-black/5">
            {lists.map((list) => (
              <li
                key={list.slug}
                className="[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg"
              >
                <button
                  onClick={() => {
                    setTask((task) => ({
                      ...task,
                      list: {
                        slug: list.slug,
                      },
                    }));

                    setChoosingList(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded px-3 py-2 ${
                    task.list.slug === list.slug
                      ? "bg-black/5 hover:bg-black/10"
                      : "bg-transparent hover:bg-black/5"
                  } cursor-default transition-colors`}
                >
                  <Logo color={list.color} size={12} />
                  <span
                    className={`w-full pr-8 text-start text-sm ${
                      task.list.slug === list.slug
                        ? "text-text"
                        : "text-text/50"
                    }`}
                  >
                    {list.name}
                  </span>
                  {task.list.slug === list.slug && (
                    <CheckIcon className="w-2 flex-shrink-0 stroke-[3px] text-text" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TaskWriter;
