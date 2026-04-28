import { Link, useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";
import { getServiceById } from "../../data/services";

const BookingSuccess = () => {
  const { scheduleId } = useParams();
  const { state } = useLocation();
  const cardData = state?.cardData || getServiceById(scheduleId);
  const selectedDate = state?.selectedDate ? new Date(state.selectedDate) : null;
  const selectedDateLabel = selectedDate
    ? format(selectedDate, "EEE, MMM d, yyyy")
    : "Date not selected";

  return (
    <section className="px-4 py-16 xl:w-[760px] xl:mx-auto">
      <div className="border border-gray-200 bg-white p-6 text-center sm:p-8">
        <p className="mb-3 text-xs tracking-[4px] text-gray-500">CONFIRMED</p>
        <h1 className="text-2xl mb-4">Booking request received</h1>
        <p className="font-thin text-gray-600">
          Thanks{state?.firstName ? `, ${state.firstName}` : ""}. This demo
          keeps bookings local, but the confirmation screen is ready for a real
          integration.
        </p>

        {cardData && (
          <div className="my-8 grid gap-3 border-y border-gray-200 py-6 text-left text-sm text-gray-600 sm:grid-cols-2">
            <p>{cardData.title}</p>
            <p>{cardData.type}</p>
            <p>{selectedDateLabel}</p>
            <p>{state?.selectedTime || "Time not selected"}</p>
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/book-online"
            className="bg-black px-5 py-3 text-sm tracking-[2px] text-white hover:bg-red-400"
          >
            BOOK ANOTHER
          </Link>
          <Link
            to="/"
            className="border border-black px-5 py-3 text-sm tracking-[2px]"
          >
            VIEW WORK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookingSuccess;
