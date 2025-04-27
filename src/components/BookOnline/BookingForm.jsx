import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    navigate("/book-online");
    return null;
  }

  const { cardData, selectedDate, selectedTime, timezone } = state;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempErrors = {};

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
    } else {
      setErrors({});
      setFormSubmitted(true);
      setShowModal(true); // Now will work!
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-start p-4 md:w-[425px] md:mx-auto xl:w-[1100px] xl:grid xl:grid-cols-2 xl:min-h-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm xl:text-lg text-gray-500 hover:underline mb-4 cursor-pointer xl:col-span-3 xl:mr-auto"
      >
        {"< Back"}
      </button>

      {/* Heading */}
      <h2 className="text-2xl mb-2 xl:col-span-3">Booking Form</h2>

      {/* Client Details */}
      <span className="text-gray-600 mb-2 xl:col-span-2">Client Details</span>

      {/* Alert Notice */}
      <div className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded mb-4 -z-1 xl:col-start-1">
        Have an account?{" "}
        <button
          className="underline cursor-pointer"
          onClick={() => setShowLoginPopup(true)}
        >
          Log In
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 xl:max-w-none xl:col-start-1 xl:col-span-2 xl:grid xl:grid-cols-4 relative"
      >
        <div>
          <input
            className="border p-2 w-full"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div>
          <input
            className="border p-2 w-full"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="xl:col-start-1 xl:mb-auto">
          <input
            className="border p-2 w-full"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="xl:mb-auto">
          <input
            className="border p-2 w-full"
            type="tel"
            placeholder="Phone"
            name="subject"
            onChange={handleChange}
          />
        </div>

        <textarea
          className="border p-2 xl:col-start-1 xl:col-span-2 xl:mb-auto"
          placeholder="Add your message"
          rows={6}
          name="message"
          onChange={handleChange}
        ></textarea>

        {/* Booking Details */}
        <div className="my-4 text-left w-full max-w-md xl:col-span-2 xl:row-span-2 xl:mb-auto xl:mt-0 xl:absolute xl:top-0 xl:right-0">
          <h3 className="text-lg font-semibold mb-2">Booking Details</h3>
          <p>{cardData.title}</p>
          <p>
            {selectedDate.toString().slice(0, 15)} at {selectedTime}
          </p>
          <p>Staff Member #1</p>
          <p>1 hr</p>

          <h3 className="text-lg font-semibold mt-4 mb-2">Payment Details</h3>
          <p>{cardData.type}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 xl:col-span-2 xl:mt-auto xl:w-[450px] xl:ml-auto cursor-pointer"
        >
          Book Now
        </button>
      </form>
      {/* Popup for Login */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setShowLoginPopup(false)}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            ×
          </button>
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">Demo Mode</h1>
            <p className="text-gray-700">
              To make this template yours, start editing it.
            </p>
            <button
              onClick={() => setShowLoginPopup(false)}
              className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-800"
            >
              Ok
            </button>
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded p-8 relative w-11/12 max-w-md">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              ✖
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center">
              We can't accept online orders right now
            </h2>
            <p className="text-center mb-4">
              Please contact us to complete your purchase.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="block mx-auto bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 cursor-pointer"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingForm;
