import EventCard from "./EventCard";
import Footer from "./Footer";
import Map from "./Map";
import Nav from "./Nav";
import ProjectsSpotLight from "./ProjectsSpotLight";
import Search from "./Search";

const EVENTS = [
  {
    image: "",
    title:
      "Revive the spirit of FOSS and Open Source with Devfolio tema in Mumbai",
    place: "Mumbai",
    desc: "Revive the spirit of FOSS and Open Source with Devfolio tema in Mumbai",
    time: ["Feb 10 - 12, 2023"],
  },
  {
    image: "",
    title:
      "Revive the spirit of FOSS and Open Source with Devfolio tema in Mumbai",
    place: "Mumbai",
    desc: "Revive the spirit of FOSS and Open Source with Devfolio tema in Mumbai",
    time: ["Feb 10 - 12, 2023"],
  },
  {
    image: "",
    title: "Mumbai FOSS",
    place: "Mumbai",
    desc: "Revive the spirit of FOSS and Open Source with Devfolio tema in Mumbai",
    time: ["Feb 10 - 12, 2023"],
  },
  {
    image: "",
    title:
      "Revive the spirit of FOSS and Open Source with Devfolio tema in Mumbai",
    place: "Mumbai",
    desc: "Revive the spirit of FOSS and Open Source with Devfolio tema in Mumbai",
    time: ["Feb 10 - 12, 2023"],
  },
];

function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Map />
        <Search />
        <div className="w-4/5 p-8 mx-auto my-8 bg-white shadow-xl rounded-xl">
          <h3 className="mb-6 text-sm font-semibold leading-4 tracking-wider uppercase text-nav-inactive font-map">
            Hottest events
          </h3>
          <div className="grid gap-8">
            {EVENTS.map((event) => {
              return <EventCard {...event} />;
            })}
          </div>
        </div>
        <ProjectsSpotLight />
      </main>
      <Footer />
    </>
  );
}

export default App;
