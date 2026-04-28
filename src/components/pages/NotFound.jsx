import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="px-4 py-20 text-center xl:w-[800px] xl:mx-auto">
      <p className="text-xs tracking-[4px] text-gray-500 mb-4">404</p>
      <h1 className="text-3xl mb-4">This page is off the board</h1>
      <p className="font-thin text-gray-600 mb-8">
        The route does not exist in this portfolio demo. Head back to the work
        index or book a creative direction session.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="bg-black text-white px-5 py-3 text-sm tracking-[2px]"
        >
          VIEW WORK
        </Link>
        <Link
          to="/book-online"
          className="border border-black px-5 py-3 text-sm tracking-[2px]"
        >
          BOOK ONLINE
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
