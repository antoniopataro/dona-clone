import { useEffect, useRef } from "react";

import ReactCalendar from "react-calendar";

import "./index.scss";

interface Props {
  onChange: (date: Date) => void;
}

function Calendar({ onChange }: Props) {
  useEffect(() => {
    if (!calendarRef.current) return;

    const position = calendarRef.current.getBoundingClientRect();
    const viewport = { height: window.innerHeight, width: window.innerWidth };

    if (position.y > viewport.height / 2) {
      calendarRef.current.style.top = "auto";
      calendarRef.current.style.bottom = "calc(32px + 8px * 2)";
    }
  }, []);

  const calendarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={calendarRef} className="absolute right-0 top-[calc(100%+8px)]">
      <ReactCalendar
        locale="en-US"
        navigationLabel={({ label }) =>
          label.split(" ")[0].slice(0, 3) + " " + label.split(" ")[1]
        }
        onClickDay={onChange}
      />
    </div>
  );
}

export default Calendar;
