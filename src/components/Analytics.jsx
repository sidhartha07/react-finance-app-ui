import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#00df9a] font-bold md:text-3xl text-lg uppercase">
            Data Analytics Dashboard
          </h1>
          <p className="text-gray-900 font-bold md:text-4xl sm:text-3xl text-2xl sm:py-4 py-2">
            Manage Data Analytics Centrally
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quod
            deleniti iste quas delectus odit dolorem quis a modi optio earum
            natus architecto provident dicta, recusandae commodi dolor officia
            perferendis.
          </p>
          <button className="bg-[#00df9a] hover:bg-[#62ffd3] w-[200px] rounded-md my-6 font-bold px-6 py-3 md:mx-0 mx-auto text-gray-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
