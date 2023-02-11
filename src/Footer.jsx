import {
  FaDiscord,
  FaTelegram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineDribbble } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-4/5 mx-auto">
      <div className="flex py-16 border-b border-black">
        <div className="w-2/5 mr-auto ">
          <p className=" text-5xl font-extrabold leading-[106%] text-footer-black">
            We love <span className="text-footer-blue">software</span> and the{" "}
            <span className="text-footer-orange">people</span> who build them.
          </p>
          <div className="flex gap-3 mt-8">
            <FaTelegram size={30} className="text-footer-telegram" />
            <FaTwitter size={30} className="text-footer-twitter" />
            <FaDiscord size={30} className="text-footer-discord" />
            <AiOutlineDribbble size={30} className="text-pink-600" />
            <FaGithub size={30} />
            <FaLinkedin size={30} className="text-footer-linkedin" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2 text-black">
            <h3 className="text-lg font-semibold tracking-wide text-footer-bg font-map">
              Community
            </h3>
            <span>Organize a Hackathon</span>
            <span>Explore Hackathons</span>
            <span>Brand Assets</span>
          </div>
          <div className="flex flex-col gap-2 text-black">
            <h3 className="text-lg font-semibold tracking-wide text-footer-bg font-map">
              Company
            </h3>
            <span>About</span>
            <span>Blog</span>
            <span>Careers</span>
          </div>
          <div className="flex flex-col gap-2 text-black">
            <h3 className="text-lg font-semibold tracking-wide text-footer-bg font-map">
              Support
            </h3>
            <span>Help</span>
            <span>Status</span>
            <span>Contact us</span>
          </div>
        </div>
      </div>
      <div className="my-16">
        <h4 className="mb-8 text-3xl font-extrabold text-blue-600 font-map">
          Devfolio
        </h4>
        <p>&copy; 2023, NSB Classic PTE LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
