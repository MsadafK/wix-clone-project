import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/pages/Home";
import ShowReel from "./components/pages/ShowReel";
import About from "./components/pages/About";
import BookOnline from "./components/BookOnline/BookOnline";
import Footer from "./components/Footer";
import Schedule from "./components/BookOnline/Schedule";
import BookingForm from "./components/BookOnline/BookingForm";
import BookingSuccess from "./components/BookOnline/BookingSuccess";
import DetailsPage from "./components/pages/DetailsPage";

const App = () => {
  return (
    <div className="font-rubik">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-reel" element={<ShowReel />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-online" element={<BookOnline />} />
          <Route
            path="/book-online/:scheduleId/schedule"
            element={<Schedule />}
          />
          <Route
            path="/book-online/:scheduleId/booking-form"
            element={<BookingForm />}
          />
          <Route
            path="/book-online/:scheduleId/booking-success"
            element={<BookingSuccess />}
          />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
