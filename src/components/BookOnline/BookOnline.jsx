import BookingCard from "../BookingCard";
import { services } from "../../data/services";

const BookOnline = () => {
  return (
    <section className="px-4 py-10 xl:w-[1100px] xl:mx-auto xl:py-16">
      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_minmax(220px,360px)] md:items-end">
        <div>
          <p className="mb-3 text-xs tracking-[4px] text-gray-500">SERVICES</p>
          <h1 className="text-2xl sm:text-3xl">Book a creative direction session</h1>
        </div>
        <p className="font-thin text-gray-600 md:text-right">
          Choose a focused consultation, select a time, and send a booking
          request through the demo flow.
        </p>
      </div>

      <div className="grid gap-6">
        {services.map((data) => (
          <BookingCard
            key={data.id}
            title={data.title}
            time={data.time}
            type={data.type}
            image={data.image}
            description={data.description}
            id={data.id}
          />
        ))}
      </div>
    </section>
  );
};

export default BookOnline;
