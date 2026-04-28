import BookingCard from "../BookingCard";
import { services } from "../../data/services";

const BookOnline = () => {
  return (
    <section className="flex flex-col gap-8 p-4 py-12 xl:w-[1100px] xl:mx-auto xl:gap-16 xl:py-16">
      {services.map((data) => (
        <BookingCard
          key={data.id}
          title={data.title}
          time={data.time}
          type={data.type}
          image={data.image}
          id={data.id}
        />
      ))}
    </section>
  );
};

export default BookOnline;
