import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";
const EventCard = ({ image, title, place, desc, time }) => {
  return (
    <div className="flex gap-4">
      <picture className="w-48 h-48 bg-red-200">
        <img src={image} alt="" />
      </picture>
      <div>
        <h3 className="text-2xl font-bold font-map">{title}</h3>
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
