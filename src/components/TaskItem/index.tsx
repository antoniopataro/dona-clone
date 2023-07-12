import React, { useCallback, useRef, useState } from "react";

import { useDispatch } from "react-redux";

import Button from "@components/Button";
import Calendar from "@components/Calendar";
import Checkbox from "@components/Checkbox";
import Logo from "@components/Logo";
import LordIcon from "@components/LordIcon";

import useOnClickOutside from "@hooks/useOnClickOutside";
import useWindowSize from "@hooks/useWindowSize";

import { updateTask } from "@store/modules/lists/actions";
import { Task } from "@store/modules/lists/types";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  adding: boolean;
  addingId: string | null;
  color: string;
  removing: boolean;
  removingId: string | null;
  removeTask: (id: string) => void;
  task: Task;
}

function TaskItem({
  adding,
  addingId,
  color,
  removeTask,
  removing,
  removingId,
  task,
}: Props) {
  const dispatch = useDispatch();

  const [choosingDate, setChoosingDate] = useState(false);
  const [choosingDateTaskId, setChoosingDateTaskId] = useState<string | null>(
    null
  );
  const [renamingTask, setRenamingTask] = useState(false);

  const datePickerRef = useRef<HTMLDivElement>(null);
  const renameTaskTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleRenameTask = useCallback(
    (content: string) => {
      dispatch(
        updateTask({
          task: {
            ...task,
            content,
          },
        })
      );

      setRenamingTask(false);
    },
    [dispatch, task]
  );

  const handleUpdateTask = useCallback(
    (task: Task) => {
      dispatch(updateTask({ task }));
    },
    [dispatch]
  );

  const startRenamingTask = useCallback(
    (e: React.MouseEvent) => {
      const height = e.currentTarget.getBoundingClientRect().height;
      const width = e.currentTarget.getBoundingClientRect().width;

      setRenamingTask(true);

      setTimeout(() => {
        if (!renameTaskTextareaRef.current) {
          setRenamingTask(false);
          return;
        }

        renameTaskTextareaRef.current.focus();
        renameTaskTextareaRef.current.select();
        renameTaskTextareaRef.current.style.height = `${height}px`;
        renameTaskTextareaRef.current.style.width = `${width}px`;
      });
    },
    [setRenamingTask, renameTaskTextareaRef]
  );

  const toggleTaskDone = () => {
    dispatch(updateTask({ task: { ...task, done: !task.done } }));
  };

  useOnClickOutside(datePickerRef, () => {
    setChoosingDate(false);
    setChoosingDateTaskId(null);
  });

  const { width } = useWindowSize();

  return (
    <li
      className={`${
        adding && addingId === task.id
          ? "animate-add-item"
          : removing && removingId === task.id
          ? "animate-remove-item"
          : ""
      } group pointer-events-auto flex h-auto w-full origin-top items-center gap-4 bg-white px-3 transition-all sm:px-4 ${
        task.done ? "opacity-75" : ""
      }`}
    >
      <Checkbox checked={task.done} onChange={toggleTaskDone} />
      {renamingTask ? (
        <textarea
          defaultValue={task.content}
          onBlur={(e) => handleRenameTask(e.target.value)}
          onKeyDown={(e) => {
            if (!renameTaskTextareaRef.current) return;

            if (e.key === "Enter") {
              handleRenameTask(renameTaskTextareaRef.current.value);
            }
          }}
          ref={renameTaskTextareaRef}
          className="hide-scrollbar resize-none bg-transparent py-3 text-left text-sm text-text outline-none sm:min-h-[52px] sm:py-4 md:min-h-[60px] md:py-5"
        />
      ) : (
        <span
          onClick={(e) => {
            if (e.detail !== 2) return;

            startRenamingTask(e);
          }}
          className="min-h-[44px] w-full py-3 text-sm text-text sm:min-h-[52px] sm:py-4 md:min-h-[60px] md:py-5"
        >
          <ReactMarkdown
            allowedElements={["a", "del", "em", "p", "strong"]}
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ ...props }) => (
                <span className="group/a whitespace-nowrap">
                  <a
                    {...props}
                    className="text-primary underline group-hover/a:pr-[2px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <ArrowUpRightIcon className="translate-y inline-block w-0 -translate-x-1 stroke-2 text-primary opacity-0 transition-all group-hover/a:w-2 group-hover/a:translate-x-0 group-hover/a:opacity-100" />
                </span>
              ),
            }}
            className={`markdown w-full break-all ${
              task.done ? "pointer-events-none" : ""
            }`}
          >
            {task.done ? `~${task.content}~` : task.content}
          </ReactMarkdown>
        </span>
      )}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden sm:block">
          <Logo color={color} size={12} />
        </div>
        {task.date && (
          <span className="hidden whitespace-nowrap text-xs font-medium text-text/50 sm:block">
            {new Date(task.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
            {new Date(task.date).getFullYear() !== new Date().getFullYear() &&
              ` · ${new Date(task.date).getFullYear()}`}
          </span>
        )}
        <div ref={datePickerRef} className="relative hidden sm:block">
          <Button
            icon={
              <LordIcon
                src="https://cdn.lordicon.com/qjuahhae.json"
                trigger="hover"
                colors={{ primary: "#808080" }}
                size={16}
              />
            }
            onClick={() => {
              setChoosingDateTaskId(task.id);
              setChoosingDate((choosingDate) => !choosingDate);
            }}
          />
          {choosingDate && choosingDateTaskId === task.id && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-10">
              <Calendar
                onChange={(d) => {
                  handleUpdateTask({ ...task, date: d.toISOString() });

                  setChoosingDate(false);
                  setChoosingDateTaskId(null);
                }}
              />
            </div>
          )}
        </div>
        {(width === 0 ? window.innerWidth : width) >= 768 ? (
          <Button
            onClick={() => removeTask(task.id)}
            icon={
              <LordIcon
                src="https://cdn.lordicon.com/kfzfxczd.json"
                trigger="hover"
                colors={{ primary: "#808080" }}
                size={16}
              />
            }
          />
        ) : (
          <Button
            onClick={() => removeTask(task.id)}
            icon={
              <LordIcon
                src="https://cdn.lordicon.com/kfzfxczd.json"
                trigger="hover"
                colors={{ primary: "#808080" }}
                size={12}
              />
            }
            size="sm"
          />
        )}
      </div>
    </li>
  );
}

export default TaskItem;
