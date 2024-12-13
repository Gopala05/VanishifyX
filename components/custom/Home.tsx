// Library Imports
import Link from "next/link";

const Home = () => {
  return (
    <section className="bg-bgcolor text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
            Document and Diagram
            <span className="sm:block py-2"> For Engineering Teams </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl sm:text-3xl/relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-4/5 rounded-xl border-none bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-3 text-lg font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
