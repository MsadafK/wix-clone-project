import { useNavigate } from "react-router-dom";

const BookingCard = ({ title, time, type, image, description, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book-online/${id}/schedule`, {
      state: { id, title, time, type, image, description },
    });
  };

  return (
    <article className="grid overflow-hidden border border-gray-200 bg-white md:grid-cols-[minmax(220px,0.8fr)_1fr]">
      <button
        type="button"
        onClick={handleClick}
        className="group block h-[240px] w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-black md:h-full"
        aria-label={`Book ${title}`}
      >
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={title}
          loading="lazy"
        />
      </button>

      <div className="flex min-h-[260px] flex-col gap-4 p-5 sm:p-6 lg:p-8">
        <div>
          <p className="mb-3 text-xs tracking-[3px] text-gray-500">{type}</p>
          <button
            type="button"
            className="text-left text-xl transition-colors hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-black sm:text-2xl"
            onClick={handleClick}
          >
            {title}
          </button>
        </div>

        <p className="font-thin text-gray-600">{description}</p>

        <div className="mt-auto flex flex-col gap-4 border-t border-gray-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">{time}</p>
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-black px-5 py-3 text-sm tracking-[2px] text-white transition-colors hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
            onClick={handleClick}
          >
            Book Now
            <span aria-hidden="true">-&gt;</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookingCard;
