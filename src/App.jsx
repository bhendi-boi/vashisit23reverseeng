import Map from "./Map";
import Nav from "./Nav";
import Search from "./Search";

function App() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-bg-body">
        <Map />
        <Search />
      </main>
    </>
  );
}

export default App;
