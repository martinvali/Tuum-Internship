import "./App.css";

function App() {
  return (
    <main className="bg-primary h-screen px-4 text-black-primary">
      <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0">
        <div>
          <p className="font-denim">Media enquiries:</p>
          <a className="" href="mailto:press@tuum.com">
            press@tuum.com
          </a>
        </div>
      </div>
      <div>
        <p className="">Career questions:</p>
        <a className="" href="mailto:careers@tuum.com">
          careers@tuum.com
        </a>
      </div>
    </main>
  );
}

export default App;
