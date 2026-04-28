import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { getServiceById } from "../../data/services";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const navigate = useNavigate();
  const { scheduleId } = useParams();
  const { state } = useLocation();
  const cardData = state?.cardData || getServiceById(scheduleId);
  const selectedDate = state?.selectedDate ? new Date(state.selectedDate) : null;
  const selectedTime = state?.selectedTime || "";
  const timezone = state?.timezone || "";
  const bookingDateLabel = selectedDate
    ? format(selectedDate, "EEE, MMM d, yyyy")
    : "Date not selected";

  useEffect(() => {
    if (!showModal && !showLoginPopup) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
        setShowLoginPopup(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showLoginPopup, showModal]);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tempErrors = {};

    if (!formData.firstName.trim()) {
      tempErrors.firstName = "! Enter a first name.";
    }
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "! Enter a last name.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "! Enter an email address like example@mysite.com.";
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});
    setShowModal(true);
  };

  return (
    <section className="px-4 py-8 xl:w-[1100px] xl:mx-auto xl:py-14">
      <button
        onClick={() => navigate(`/book-online/${scheduleId}/schedule`)}
        className="mb-6 text-sm text-gray-500 hover:text-black hover:underline cursor-pointer"
      >
        {"< Back to schedule"}
      </button>

      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_minmax(220px,360px)] md:items-end">
        <div>
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">BOOKING</p>
          <h1 className="text-2xl sm:text-3xl">Confirm your details</h1>
        </div>
        <p className="font-thin text-gray-600 md:text-right">
          This demo keeps the request local while showing the complete booking
          experience.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)]">
        <div className="border border-gray-200 bg-white p-5 sm:p-6 lg:p-8">
          <div className="mb-6 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            Have an account?{" "}
            <button
              className="underline cursor-pointer"
              onClick={() => setShowLoginPopup(true)}
            >
              Log In
            </button>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="firstName" className="text-sm text-gray-600">
                First Name *
              </label>
              <input
                id="firstName"
                className="min-h-11 border border-gray-300 p-3"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">{errors.firstName}</p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="lastName" className="text-sm text-gray-600">
                Last Name *
              </label>
              <input
                id="lastName"
                className="min-h-11 border border-gray-300 p-3"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">{errors.lastName}</p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-gray-600">
                Email *
              </label>
              <input
                id="email"
                className="min-h-11 border border-gray-300 p-3"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm text-gray-600">
                Phone
              </label>
              <input
                id="phone"
                className="min-h-11 border border-gray-300 p-3"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                className="min-h-[140px] border border-gray-300 p-3"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="min-h-12 bg-black px-5 py-3 text-sm tracking-[2px] text-white transition-colors hover:bg-red-400 cursor-pointer sm:col-span-2"
            >
              Send Booking Request
            </button>
          </form>
        </div>

        <aside className="border border-gray-200 bg-gray-50 p-5 sm:p-6 lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">SUMMARY</p>
          <h2 className="mb-3 text-xl">{cardData.title}</h2>
          <p className="mb-5 font-thin text-gray-600">{cardData.description}</p>

          <div className="grid gap-3 border-t border-gray-200 pt-5 text-sm text-gray-600">
            <p>{cardData.type}</p>
            <p>{cardData.time}</p>
            <p>{bookingDateLabel}</p>
            <p>{selectedTime || "Time not selected"}</p>
            {timezone && <p>{timezone}</p>}
          </div>
        </aside>
      </div>

      {showLoginPopup && (
        <div
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-demo-title"
        >
          <button
            onClick={() => setShowLoginPopup(false)}
            className="absolute top-4 right-4 text-2xl font-bold"
            aria-label="Close login prompt"
          >
            X
          </button>
          <div className="max-w-sm text-center space-y-4">
            <h1 id="login-demo-title" className="text-2xl font-bold text-gray-900">
              Demo Mode
            </h1>
            <p className="text-gray-700">
              This portfolio demo does not include account login.
            </p>
            <button
              onClick={() => setShowLoginPopup(false)}
              className="min-h-11 px-6 py-2 bg-black text-white hover:bg-red-400 cursor-pointer"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-confirmation-title"
        >
          <div className="bg-white p-8 relative w-full max-w-md">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              aria-label="Close booking confirmation"
            >
              X
            </button>
            <h2
              id="booking-confirmation-title"
              className="text-xl font-semibold mb-4 text-center"
            >
              Booking request received
            </h2>
            <p className="text-center mb-6 text-gray-600">
              Thanks, {formData.firstName}. This demo shows a polished booking
              confirmation without sending live orders.
            </p>
            <button
              onClick={() =>
                navigate(`/book-online/${scheduleId}/booking-success`, {
                  state: {
                    cardData,
                    selectedDate,
                    selectedTime,
                    timezone,
                    firstName: formData.firstName,
                  },
                })
              }
              className="block min-h-11 w-full bg-black text-white py-2 px-6 hover:bg-red-400 cursor-pointer"
            >
              View Confirmation
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingForm;
