const ProjectCard = ({ title, caseLink, siteLink, images }) => {
  return (
    <div className="space-y-6">
      {/* Gambar  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden ${index === 0 ? "col-span-2" : ""}`}
          >
            <img
              src={image}
              alt={`${title}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tombol */}
      <div className="flex gap-4 mt-6 justify-center sm:justify-start">
        {/* View Cases Button */}
        <a
          href={caseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-8 font-semibold bg-primary-color text-white font-medium rounded-full hover:bg-[#FF7F32] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out sm:hover:bg-[#FF9500] sm:hover:scale-100 sm:hover:shadow-none"
        >
          <img src="./src/assets/Cases.svg" alt="View Icon" className="w-[24px] sm:w-[28px]" />
          View Cases
        </a>

        {/* Visit Site Button */}
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-8 font-semibold bg-primary-color text-white font-medium rounded-full hover:bg-[#FF7F32] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out sm:hover:bg-[#FF9500] sm:hover:scale-100 sm:hover:shadow-none"
        >
          <img src="./src/assets/SVGRepo_iconCarrier.svg" alt="Site Icon" className="w-[24px] sm:w-[28px]" />
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
