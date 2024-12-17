const Banner = () => {
  return (
    <div className="flex justify-center py-[100px] ">
      <div
        className="bg-cover bg-center h-[226px] w-[90%]  flex items-center text-white rounded-[40px] shadow-lg"
        style={{ backgroundImage: "url('./src/assets/Banner.jpeg')" }}
      >
        <div className="w-full flex flex-col lg:flex-row justify-between items-center px-8">
          {/* Judul */}
          <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left mb-4 lg:mb-0">
            Interested working with me?
          </h1>

          {/* Tombol */}
          <div className="flex space-x-4">
            {/* Tombol See More Project */}
            <button className="border border-primary-color font-medium text-primary-color px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:bg-white hover:border-white hover:text-black shadow-lg">
              See More Project
            </button>

            {/* Tombol Email Me */}
            <button
              className="font-medium text-white px-7 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black shadow-lg"
              style={{
                backgroundColor: "var(--primary-color)",
              }}
            >
              Email Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
