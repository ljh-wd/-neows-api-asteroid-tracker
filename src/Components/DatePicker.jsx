// ! IMPORTS
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DatePicker = ({ func }) => {
  // ! Setting the state to eventually pass back up the tree

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // ! Setting open and close state for the date picker

  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  // ! Function for closing date picker when 'escape' key is pressed

  const closeOnEscape = (e) => {
    if (e.key === "Escape") setOpen(false);
  };
  // ! Function for closing date picker when clicking out of focus

  const closeOnOutOfFocus = (e) => {
    if (closeRef.current && !closeRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  // ! Main funciton. This is where the date is being passed back up the tree.

  const handleSubmit = (e) => {
    e.preventDefault();
    func(
      format(range[0].startDate, "yyyy-MM-dd"),
      format(range[0].endDate, "yyyy-MM-dd")
    );
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", closeOnEscape, true);
    document.addEventListener("click", closeOnOutOfFocus, true);
  }, []);

  return (
    <form className="date-wrap" ref={closeRef} onSubmit={handleSubmit}>
      <input
        value={`${format(range[0].startDate, "yyyy-MM-dd")} to ${format(
          range[0].endDate,
          "yyyy-MM-dd"
        )}`}
        readOnly
        className="date-input-box"
        onClick={() => setOpen((open) => !open)}
      />

      {open && (
        <DateRange
          onChange={(item) => setRange([item.selection])}
          editableDateInputs={false}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="vertical"
          className="date-picker"
        />
      )}

      <button type="submit">Get Asteroid Data</button>
    </form>
  );
};

export default DatePicker;
