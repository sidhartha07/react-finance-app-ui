import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-start">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-2">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={150}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-xl text-md text-gray-500 font-bold">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] hover:bg-[#62ffd3] w-[200px] rounded-md mx-auto my-6 font-bold px-6 py-3 text-gray-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
