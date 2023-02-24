import { AiOutlineHeart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const PROJECTS = [
  {
    label: "Liquidation Protector",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
    stars: 20,
  },
  {
    label: "Kassle A crypt Wallet you'll love",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
    stars: 10,
  },
  {
    label: "Liquidation Protector",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
    stars: 30,
  },
];

const ProjectsSpotLight = () => {
  return (
    <div className="w-4/5 p-8 mx-auto my-6 bg-white shadow-xl rounded-xl drop-shadow-lg">
      <h3 className="mb-8 text-sm font-semibold leading-4 tracking-wider uppercase text-nav-inactive font-map">
        Projects Spotlight
      </h3>
      <div className="flex flex-col gap-2">
        {PROJECTS.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSpotLight;

function Project({ label, desc, stars }) {
  return (
    <div className="flex gap-3">
      <picture className="w-1/5 h-full bg-red-200">
        <img src="" alt="" />
      </picture>
      <div className="grid h-full grid-cols-2 gap-4 p-4 border-2 bg-event-time-bg place-items-center grid-auto border-nav-inactive text-nav-inactive rounded-2xl">
        <RxAvatar size={36} />
        <RxAvatar size={36} />
        <RxAvatar size={36} />
        <RxAvatar size={36} />
      </div>
      <div className="flex flex-1 p-4 border-2 border-nav-inactive rounded-2xl focus:border-button-active cursor-pointer select-none hover:border-button-active hover:[&_h4]:text-button-active hover:bg-event-time-bg">
        <div className="flex-1">
          <h4 className="text-xl font-extrabold text-border font-body">
            {label}
          </h4>
          <p className="text-project-text">{desc}</p>
        </div>
        <div className="border-[1.5px] border-nav-inactive py-2 px-6 rounded-lg">
          <AiOutlineHeart size={20} />
          <span className="font-extrabold">{stars}</span>
        </div>
      </div>
    </div>
  );
}
