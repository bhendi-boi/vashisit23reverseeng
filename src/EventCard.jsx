import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";
const EventCard = ({ image, title, place, desc, time }) => {
  return (
    <div className="flex gap-4 p-6 border rounded-lg focus-within:border-button-active cursor-pointer hover:ring-2 focus:[&_h3]:text-button-active">
      <picture className="h-48 bg-red-200 min-w-[12rem]">
        <img src={image} alt="" />
      </picture>
      <div className="">
        <h3 className="text-2xl font-extrabold font-map text-search-text focus-within:text-button-active hover:text-button-active">
          {title}
        </h3>
        <span className="inline-flex items-center gap-2 text-footer-bg">
          <GoLocation />
          {place}
        </span>
        <p className="text-lg text-footer-bg">{desc}</p>
        <div className="mt-auto">
          {time.map((t) => {
            return (
              <span className="inline-flex items-center gap-2 px-3 py-2 font-semibold rounded-lg text-event-card bg-search-bg">
                <AiOutlineCalendar size={30} />
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
