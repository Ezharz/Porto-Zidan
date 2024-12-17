const WhyHireMe = () => {
  return (
    <div className="mx-auto p-4 sm:p-8" id="reason">
      <h1 className="text-4xl sm:text-6xl md:text-5xl font-semibold text-[#344054] text-center mb-6 sm:mb-8">
        Why <span className="text-primary-color">Hire me</span> ?
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./src/assets/Mask group.png"
            alt="Profile"
            className="object-cover w-full max-w-sm sm:max-w-xs md:max-w-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-center md:justify-start gap-8 sm:gap-16 md:gap-[200px]">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1D2939]">10+</h2>
              <p className="text-base sm:text-lg text-[#667085]">Project Completed</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1D2939]">1+</h2>
              <p className="text-base sm:text-lg text-[#667085]">Years Experience</p>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-[70px] font-semibold text-[#1D2939] pt-8 sm:pt-12 md:pt-[48px] text-center md:text-left">
            Front-End Basic
          </h2>
          <p className="text-base sm:text-lg text-[#667085] mb-4 sm:mb-6 text-center md:text-left">
            HTML, Tailwind CSS, React JS
          </p>

          <div className="flex justify-center md:justify-start w-full pt-6 sm:pt-8 md:pt-[48px]">
            <button className="bg-primary-color text-white py-3 px-8 sm:px-16 md:px-[194px] text-xl sm:text-2xl md:text-[28px] rounded-lg font-semibold hover:bg-[#e06e2d] transition duration-300 w-full md:w-auto">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
