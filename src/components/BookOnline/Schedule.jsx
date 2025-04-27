import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  format,
  addMinutes,
  setHours,
  setMinutes,
  isSunday,
  isToday,
  isBefore,
  isAfter,
  setSeconds,
  setMilliseconds,
} from "date-fns";

const Schedule = () => {
  const [timezone, setTimezone] = useState("PDT");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  // Generate 60-minute time slots from 10:00 AM to 5:00 PM
  useEffect(() => {
    const startTime = setMinutes(setHours(new Date(), 10), 0);
    const endTime = setMinutes(setHours(new Date(), 17), 0);
    const times = [];

    let current = startTime;

    while (isBefore(current, endTime) || format(current, "HH:mm") === "17:00") {
      times.push(current);
      current = addMinutes(current, 60);
    }

    setAvailableTimes(times);
  }, []);

  // Disable past dates and Sundays
  const isDateSelectable = (date) => {
    const today = new Date();
    return date >= today && !isSunday(date);
  };

  // Filter slots based on date
  const filteredTimes = availableTimes.filter((time) => {
    const selectedDateAtTime = setSeconds(
      setMilliseconds(new Date(selectedDate), 0),
      0
    );
    selectedDateAtTime.setHours(time.getHours(), time.getMinutes());

    if (isToday(selectedDate)) {
      const now = new Date();
      return isAfter(selectedDateAtTime, now);
    }

    return true;
  });

  const canContinue = selectedDate && selectedTime && timezone;

  const { scheduleId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const cardData = location.state;

  if (!cardData) {
    navigate("/book-online"); // Optional fallback
    return null;
  }

  return (
    <section className="flex flex-col gap-4 items-start md:w-[425px] md:mx-auto xl:w-[1100px] p-4 xl:mb-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm xl:text-lg text-gray-500 hover:underline mb-4 cursor-pointer"
      >
        {"< Back"}
      </button>
      {/* title and text */}
      <div className="font-thin">
        <h3 className="text-xl">Schedule your service</h3>
        <p>
          Check out our availability and book the date and time that works for
          you
        </p>
      </div>
      {/* ----------- */}
      <div className="w-full font-sans flex flex-col gap-4 xl:grid xl:grid-cols-3 xl:gap-0">
        <h4 className="text-xl xl:border-b-2 xl:border-gray-400">
          Select a Date and Time
        </h4>
        {/* Timezone Dropdown */}
        <div className="font-thin text-gray-300 xl:mr-8">
          <label className="block mb-2 font-medium sr-only">Time Zone</label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full border-b-2 border-gray-400 py-2 text-gray-800"
          >
            <option value="PDT">Pacific Daylight Time (PDT)</option>
            <option value="IST">Indian Standard Time (GMT+5:30)</option>
          </select>
        </div>

        {/* Always visible calendar */}
        <div className="w-full flex justify-center items-center xl:col-start-1 xl:row-start-2 xl:justify-start xl:mt-4">
          <label className="block mb-2 sr-only">Select a Date and Time</label>
          <DatePicker
            inline
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setSelectedTime("");
            }}
            filterDate={isDateSelectable}
            minDate={new Date()}
          />
        </div>

        {/* Time slots grid */}
        <div className="xl:col-start-2 xl:row-start-2 xl:mt-4 xl:mr-8">
          <label className="block mb-2 font-thin">{`Availability for ${selectedDate
            .toString()
            .slice(0, 15)}`}</label>
          {filteredTimes.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredTimes.map((time, idx) => {
                const timeLabel = format(time, "hh:mm a");
                const isSelected = selectedTime === timeLabel;

                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedTime(timeLabel)}
                    className={`border rounded px-4 py-2 text-sm ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "hover:bg-blue-100"
                    } cursor-pointer`}
                  >
                    {timeLabel}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              No time slots available today.
            </p>
          )}
        </div>
        <h5 className="xl:text-xl xl:col-start-3 xl:row-start-1">
          Servic Details
        </h5>
        <div className="mb-4 xl:mt-4">
          {/* Mini Card */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-md">{cardData.title}</h2>
              <p className="text-sm text-gray-600">{`${selectedDate
                .toString()
                .slice(0, 15)} at ${selectedTime}`}</p>
              <p className="text-sm text-gray-600">Staff Member #1</p>
              <p className="text-sm text-gray-600">{cardData.time}</p>
              <p className="text-sm text-gray-500">{cardData.type}</p>
            </div>
          </div>
          {/* Continue Button */}
          <button
            className={`w-full py-2 px-4 text-white rounded ${
              canContinue
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            } mt-12 cursor-pointer`}
            disabled={!canContinue}
            onClick={() =>
              navigate(`/book-online/${scheduleId}/booking-form`, {
                state: {
                  cardData,
                  selectedDate,
                  selectedTime,
                  timezone,
                },
              })
            }
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
