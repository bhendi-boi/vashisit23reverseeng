import EventCard from "./EventCard";
import Footer from "./Footer";
import Map from "./Map";
import Nav from "./Nav";
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
];

function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Map />
        <Search />
        <div className="grid w-4/5 gap-8 mx-auto">
          {EVENTS.map((event) => {
            return <EventCard {...event} />;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
