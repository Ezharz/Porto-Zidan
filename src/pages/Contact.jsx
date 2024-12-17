const Footer = () => {
    return (
        <div className="" id="contact">
            {/* Logo */}
            <div className="flex justify-center">
                <img src="./src/assets/Frame.svg" alt="" />
            </div>

            {/* Navigasi Link */}
            <ul className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 pt-[30px] text-[24px] font-semibold">
                <li>
                    <a href="#Home" className="hover:text-gray-400 transition-colors">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#AboutMe" className="hover:text-gray-400 transition-colors">
                        Project
                    </a>
                </li>
                <li>
                    <a href="#Services" className="hover:text-gray-400 transition-colors">
                        Reason
                    </a>
                </li>
                <li>
                    <a href="#Projects" className="hover:text-gray-400 transition-colors">
                        Contact
                    </a>
                </li>
            </ul>
            <div className="border border-gray-300 mx-[80px]"></div>


            {/* Copyright */}
            <div className="flex justify-between px-[80px] py-4">
                <div className=" font-medium">
                    <p>© 2024 Zidan. All rights reserved.</p>
                </div>
                <div className="flex gap-4 pl-[80px]">
                    <img src="./src/assets/Instagram.svg" alt=""  className="w-[30px]"/>
                    <img src="./src/assets/Mail.svg" alt="" className="w-[30px]"/>
                </div>
            </div>


        </div>
    );
};

export default Footer;
