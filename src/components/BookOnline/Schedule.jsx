import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  addMinutes,
  format,
  isAfter,
  isBefore,
  isSunday,
  isToday,
  setHours,
  setMilliseconds,
  setMinutes,
  setSeconds,
  startOfDay,
} from "date-fns";
import { getServiceById } from "../../data/services";

const Schedule = () => {
  const [timezone, setTimezone] = useState("PDT");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const { scheduleId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const cardData = location.state || getServiceById(scheduleId);

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

  const isDateSelectable = (date) => {
    const today = startOfDay(new Date());
    return date >= today && !isSunday(date);
  };

  const filteredTimes = availableTimes.filter((time) => {
    const selectedDateAtTime = setSeconds(
      setMilliseconds(new Date(selectedDate), 0),
      0
    );
    selectedDateAtTime.setHours(time.getHours(), time.getMinutes());

    if (isToday(selectedDate)) {
      return isAfter(selectedDateAtTime, new Date());
    }

    return true;
  });

  const selectedDateLabel = format(selectedDate, "EEE, MMM d, yyyy");
  const canContinue = Boolean(selectedDate && selectedTime && timezone);

  if (!cardData) {
    return (
      <section className="p-8 text-center">
        <h2 className="text-2xl mb-4">Service not found</h2>
        <button
          onClick={() => navigate("/book-online")}
          className="bg-black text-white px-4 py-2 cursor-pointer"
        >
          View services
        </button>
      </section>
    );
  }

  return (
    <section className="px-4 py-8 xl:w-[1100px] xl:mx-auto xl:py-14">
      <button
        onClick={() => navigate("/book-online")}
        className="mb-6 text-sm text-gray-500 hover:text-black hover:underline cursor-pointer"
      >
        {"< Back to services"}
      </button>

      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_minmax(220px,360px)] md:items-end">
        <div>
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">SCHEDULE</p>
          <h1 className="text-2xl sm:text-3xl">Select a date and time</h1>
        </div>
        <p className="font-thin text-gray-600 md:text-right">
          Availability is shown in one-hour windows. Sundays and past dates are
          unavailable.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)]">
        <div className="grid gap-6 md:grid-cols-[minmax(280px,360px)_1fr]">
          <div className="overflow-hidden border border-gray-200 bg-white p-3 sm:p-4">
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

          <div className="border border-gray-200 bg-white p-4 sm:p-6">
            <label className="mb-3 block text-sm tracking-[2px] text-gray-500">
              TIME ZONE
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="mb-6 min-h-11 w-full border border-gray-300 bg-white px-3 py-2 text-gray-800"
            >
              <option value="PDT">Pacific Daylight Time (PDT)</option>
              <option value="IST">Indian Standard Time (GMT+5:30)</option>
            </select>

            <p className="mb-4 text-sm tracking-[2px] text-gray-500">
              {selectedDateLabel}
            </p>

            {filteredTimes.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
                {filteredTimes.map((time) => {
                  const timeLabel = format(time, "hh:mm a");
                  const isSelected = selectedTime === timeLabel;

                  return (
                    <button
                      key={timeLabel}
                      onClick={() => setSelectedTime(timeLabel)}
                      className={`min-h-11 border px-3 py-2 text-sm transition-colors cursor-pointer ${
                        isSelected
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-black"
                      }`}
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
        </div>

        <aside className="border border-gray-200 bg-gray-50 p-5 sm:p-6 lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">
            SERVICE DETAILS
          </p>
          <h2 className="mb-3 text-xl">{cardData.title}</h2>
          <p className="mb-5 font-thin text-gray-600">{cardData.description}</p>

          <div className="grid gap-3 border-t border-gray-200 pt-5 text-sm text-gray-600">
            <p>{cardData.type}</p>
            <p>{cardData.time}</p>
            <p>{selectedDateLabel}</p>
            <p>{selectedTime || "Choose a time"}</p>
            <p>{timezone}</p>
          </div>

          <button
            className={`mt-8 min-h-12 w-full px-4 py-3 text-sm tracking-[2px] text-white transition-colors ${
              canContinue
                ? "bg-black hover:bg-red-400 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
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
        </aside>
      </div>
    </section>
  );
};

export default Schedule;
